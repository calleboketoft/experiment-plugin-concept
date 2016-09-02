# Plugin Apps
The goal of `Plugin Apps` is to have a `platform app` that links to `plugin apps` and versioning of all these parts can be handled separately.

## Get started

- `npm install`
- `npm run watch`
- `npm start`
- navigate browser to `http://localhost:3000`

**TODO**

- Define API for including a plugin into the platform (via config file)
- Define API for communication between platform and plugin
- Deployment procedure for this stuff

## Creating a plugin app

- Add folder `my-plugin` for app in `plugin-apps`
- Add `plugin-apps/my-plugin/index.html`:

```html
<html>

<head>
  <!-- Plugin framework dependencies -->
  <script src="iframeResizer.contentWindow.min.js"></script>
  <script src="plugin-app-adaptor.js"></script>

  <!-- Your plugin script -->
  <script src="my-plugin-script.js"></script>
</head>
<body>
</body>

</html>
```

- Add your plugin script `plugin-apps/my-plugin/my-plugin-script.js`:

```javascript
// Custom script needed for bootstrap and message handling of each plugin app

(function (window) {
  window.ssgPluginApp.initialize({
    // Incoming messages from host app
    onReceivedMessage: (msg) => console.log('EXAMPLE', msg),

    // Host app and plugin adaptor are initialized,
    // bootstrap your plugin app here
    onReady: () => console.log('Bootstrap plugin app')
  })
})(window)
```

## Registering plugin app with platform

- Add entry to `plugin-apps/plugin-apps.config.js`:

```javascript
...
    {
      path: 'my-plugin',
      data: {
        linkTitle: 'My Plugin',
        indexPath: '../plugin-apps/my-plugin/index.html'
      }
    }
...
```