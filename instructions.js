'use strict';

const path = require('path');

module.exports = async (cli) => {
    try {
        await cli.copy(
            path.join(__dirname, './stubs/config.js'),
            path.join(cli.helpers.configPath(), 'hatchly', 'icons.js')
        );

        await cli.command.completed('create', 'config/hatchly/icons.js')
    } catch (error) {
        // ignore error
    }
};
