"use strict";
// All the plugin apps will be defined here
var plugin_app_component_1 = require('./plugin-app.component');
var PluginAppsRoutes = window['ssgPluginApps'].routes.map(function (route) {
    return Object.assign({}, route, { component: plugin_app_component_1.PluginAppComponent });
});
exports.PluginAppsRoutes = PluginAppsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLWFwcHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGx1Z2luLWFwcHMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQ0FBMkM7QUFDM0MscUNBQW1DLHdCQUVuQyxDQUFDLENBRjBEO0FBRTNELElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO0lBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUseUNBQWtCLEVBQUMsQ0FBQyxDQUFBO0FBQ2xFLENBQUMsQ0FBQztBQUVPLHdCQUFnQixvQkFGdkI7QUFFeUIifQ==