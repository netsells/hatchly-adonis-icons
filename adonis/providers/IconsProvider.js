'use strict';

const { ServiceProvider } = use('@adonisjs/fold');

class IconsProvider extends ServiceProvider {
    /**
     * Register the provider.
     */
    register() {
        this.app.bind('HatchlyIcons/IconsController', () => {
            const IconsController = require('../Http/Controllers/IconsController');

            return new IconsController();
        });
    }

    /**
     * Run the following commands on boot
     */
    boot() {
        const Route = use('Adonis/Src/Route');

        Route.get('api/icons', '@provider:HatchlyIcons/IconsController.getIcons');
    }
}

module.exports = IconsProvider;