# Adonis Icons

> Adonis integration for Hatchly to obtain icons from Nuxt instance


## Installation

```sh
$ yarn add @hatchly/adonis-icons
```

Add the module to your nuxt config:

```js
modules: [
    // Other modules
    '@hatchly/adonis-icons',
],
```

## Usage

Once the module is installed it will register and boot a route, complete with controller, to allow a Hatchly instance to get the keys for all icons used within the project.

### PHP

This works in tandem with the Hatchly IconAttribute package found here - @todo 

#### Usage

Add the module to your applications service providers in `start/app.js`:

```js
const providers = [
    // Other providers
    '@hatchly/adonis-icons/adonis/providers/IconProvider',
];
```

Add an `icons.js` to your config directory to set the svg sprite path.

```
const path = require('path');

module.exports = {
    path: path.resolve(__dirname, '../resources/assets/icons/sprite-file-name.svg');
};
```