"use strict";
var app_home_routes_1 = require('./routes/app-home.routes');
var plugin_apps_routes_1 = require('./routes/plugin-apps.routes');
exports.routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: app_home_routes_1.AppHomeRoutes[0].path
    }
].concat(app_home_routes_1.AppHomeRoutes, plugin_apps_routes_1.PluginAppsRoutes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdDQUE4QiwwQkFDOUIsQ0FBQyxDQUR1RDtBQUN4RCxtQ0FBaUMsNkJBRWpDLENBQUMsQ0FGNkQ7QUFFakQsY0FBTSxHQUFXO0lBQzVCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsK0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ2xDO1NBQ0UsK0JBQWEsRUFDYixxQ0FBZ0IsQ0FDcEIsQ0FBQSJ9