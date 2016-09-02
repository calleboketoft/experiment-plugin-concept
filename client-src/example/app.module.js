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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                plugin_app_component_1.PluginAppComponent,
                app_home_component_1.AppHomeComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLGlDQUE4QiwyQkFDOUIsQ0FBQyxDQUR3RDtBQUN6RCx1QkFBNkIsaUJBQzdCLENBQUMsQ0FENkM7QUFDOUMsdUJBQXVELGlCQUN2RCxDQUFDLENBRHVFO0FBQ3hFLHVCQUE2QixpQkFDN0IsQ0FBQyxDQUQ2QztBQUM5Qyw4QkFBNkIsaUJBQzdCLENBQUMsQ0FENkM7QUFDOUMsMkJBQXVCLGNBQ3ZCLENBQUMsQ0FEb0M7QUFDckMscUNBQW1DLCtCQUNuQyxDQUFDLENBRGlFO0FBQ2xFLG1DQUFpQyw2QkFDakMsQ0FBQyxDQUQ2RDtBQUM5RCxxQ0FBb0Msd0JBRXBDLENBQUMsQ0FGMkQ7QUFzQjVEO0lBQUE7SUFBeUIsQ0FBQztJQXBCMUI7UUFBQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1oseUNBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0NBQWE7Z0JBQ2IscUJBQVk7Z0JBQ1oscUJBQVksQ0FBQyxPQUFPLENBQUMsbUJBQU0sQ0FBQzthQUM3QjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSx5QkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSw2QkFBb0I7aUJBQy9CO2dCQUNELDBDQUFtQjthQUNwQjtTQUNGLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLGlCQUFTLFlBQUksQ0FBQSJ9