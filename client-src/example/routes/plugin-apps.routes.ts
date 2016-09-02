// All the plugin apps will be defined here
import { PluginAppComponent } from './plugin-app.component'

let PluginAppsRoutes = window['ssgPluginApps'].routes.map(route => {
  return Object.assign({}, route, {component: PluginAppComponent})
})

export { PluginAppsRoutes }
