import { Routes } from '@angular/router'
import { AppHomeRoutes } from './routes/app-home.routes'
import { PluginAppsRoutes } from './routes/plugin-apps.routes'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppHomeRoutes[0].path
  },
  ...AppHomeRoutes,
  ...PluginAppsRoutes
]
