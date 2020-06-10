## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
    // Other providers
    '@hatchly/adonis-icons/adonis/providers/IconsProvider',
];
```

## Config

The config file is saved as `config/hatchly/icons.js`. Make sure to update the `path` value to the **full path to the icons svg spritesheet**. 
