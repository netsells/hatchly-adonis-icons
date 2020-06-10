# Adonis Icons

> Adonis integration for Hatchly to obtain icons from Nuxt instance

This module will register a route, complete with controller, to allow a Hatchly instance to get the keys for all icons used within the project via an endpoint available at `/api/icons`.

Doing this allows your API to select from available icons in your frontend application without having to maintain two lists of icons across frontend and backend.

## Installation

Install using the adonis cli to bootstrap the installation.

```sh
$ npx @adonisjs/cli install @hatchly/adonis-icons --yarn
```

## Usage

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
    // Other providers
    '@hatchly/adonis-icons/adonis/providers/IconsProvider',
];
```

### PHP

This works in tandem with the Hatchly `RemoteIcon` Attribute package found here - @todo 

## Config

The config file is saved as `config/hatchly/icons.js`. Make sure to update the `path` value to the **full path to the icons svg spritesheet**. 
