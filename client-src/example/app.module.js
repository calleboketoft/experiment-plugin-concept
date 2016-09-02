"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var common_2 = require('@angular/common');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var plugin_app_component_1 = require('./routes/plugin-app.component');
var app_home_component_1 = require('./routes/app-home.component');
var notification_service_1 = require('./notification.service');
var nav_left_component_1 = require('./nav-left.component');
var nav_top_component_1 = require('./nav-top.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                plugin_app_component_1.PluginAppComponent,
                app_home_component_1.AppHomeComponent,
                nav_left_component_1.NavLeftComponent,
                nav_top_component_1.TopNavContainer
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot(app_routes_1.routes)
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: common_2.LocationStrategy,
                    useClass: common_2.HashLocationStrategy
                },
                notification_service_1.NotificationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLGlDQUE4QiwyQkFDOUIsQ0FBQyxDQUR3RDtBQUN6RCx1QkFBNkIsaUJBQzdCLENBQUMsQ0FENkM7QUFDOUMsdUJBQXVELGlCQUN2RCxDQUFDLENBRHVFO0FBQ3hFLHVCQUE2QixpQkFDN0IsQ0FBQyxDQUQ2QztBQUM5Qyw4QkFBNkIsaUJBQzdCLENBQUMsQ0FENkM7QUFDOUMsMkJBQXVCLGNBQ3ZCLENBQUMsQ0FEb0M7QUFDckMscUNBQW1DLCtCQUNuQyxDQUFDLENBRGlFO0FBQ2xFLG1DQUFpQyw2QkFDakMsQ0FBQyxDQUQ2RDtBQUM5RCxxQ0FBb0Msd0JBRXBDLENBQUMsQ0FGMkQ7QUFFNUQsbUNBQWlDLHNCQUNqQyxDQUFDLENBRHNEO0FBQ3ZELGtDQUFnQyxxQkFFaEMsQ0FBQyxDQUZvRDtBQXdCckQ7SUFBQTtJQUF5QixDQUFDO0lBdEIxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIscUNBQWdCO2dCQUNoQixtQ0FBZTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYixxQkFBWTtnQkFDWixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2FBQzdCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHlCQUFnQjtvQkFDekIsUUFBUSxFQUFFLDZCQUFvQjtpQkFDL0I7Z0JBQ0QsMENBQW1CO2FBQ3BCO1NBQ0YsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIn0=