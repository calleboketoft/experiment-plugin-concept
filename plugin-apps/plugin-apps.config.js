// Deployment specific configuration for plugin apps to include in the GUI

(function (window) {
  window.ssgPluginApps = window.ssgPluginApps || {}

  window.ssgPluginApps.routes = [
    {
      path: 'movies-app',
      data: {
        linkTitle: 'Movies App',
        indexPath: '../plugin-apps/movies-app/index.html'
      }
    },
    {
      path: 'music-app',
      data: {
        linkTitle: 'Music App',
        indexPath: '../plugin-apps/music-app/index.html'
      }
    }
  ]
})(window);