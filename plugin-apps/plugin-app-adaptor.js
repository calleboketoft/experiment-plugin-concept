// Generic adaptor file needed for each plugin app

(function(window) {
  window.ssgPluginApp = window.ssgPluginApp || {}
  // config params, override with plugin app logics
  var onReceivedMessageCb = (msg) => console.log('(received message callback) ', msg)
  var onReadyCb = () => console.log('(ready callback)')

  window.ssgPluginApp.sendMessageToSourceApp = function (message) {
    window.parentIFrame.sendMessage(message)
  }

  window.ssgPluginApp.initialize = function (options) {
    onReceivedMessageCb = options.onReceivedMessage
    onReadyCb = options.onReady
  }

  var initialized = false

  window.iFrameResizer = {
    messageCallback: (message) => {
      // The first message is the initialization
      if (!initialized && message.startsWith('[pluginAppInit]:')) {
        // TODO handle initialization data
        console.log('TODO handle SSG options', message)
        var jsonStr = message.replace('[pluginAppInit]:', '')
        var appOptions = JSON.parse(jsonStr)
        console.log(appOptions)
        initialized = true
        onReadyCb()
      } else {
        onReceivedMessageCb(message)
      }
    }
  }
})(window);
