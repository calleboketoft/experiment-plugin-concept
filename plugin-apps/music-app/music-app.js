// Custom script needed for bootstrap and message handling of each plugin app

(function (window) {
  window.ssgPluginApp.initialize({
    onReceivedMessage: (msg) => console.log('overridden', msg),
    onReady: () => console.log('onReady overridden')
  })
})(window)