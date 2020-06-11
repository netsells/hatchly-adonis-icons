'use-strict';

const fs = require('fs');
const Config = use('Config');

class IconsController {
    /**
     * Get the icon keys from the sprite files.
     *
     * @param {object} response
     */
    getIcons({ response }) {
        const svgSprite = fs.readFileSync(Config.get('hatchly.icons.path'), 'utf8');
        const icons = svgSprite.match(/(id="[A-z-0-9]+")/g).map((svg) => {
            return svg.replace('id="', '')
                .replace('"', '')
                .replace('icon-', '');
        });

        response.send({ icons });
    }
}

module.exports = IconsController;
