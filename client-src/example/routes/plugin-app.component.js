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
var router_1 = require('@angular/router');
var notification_service_1 = require('../notification.service');
var PluginAppComponent = (function () {
    function PluginAppComponent(domSanitizationService, notificationService, activatedRoute) {
        this.domSanitizationService = domSanitizationService;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        var pluginAppOptions = this.activatedRoute.data['value'];
        var indexPath = pluginAppOptions.indexPath;
        this.iframeSrc = this.domSanitizationService.bypassSecurityTrustResourceUrl(indexPath);
    }
    PluginAppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Lib to handle iFrame communication and resizing
        iFrameResize({
            // log: true,
            messageCallback: function (event) {
                _this.receivedMessageFromPluginApp(event);
            },
            initCallback: function (init) {
                _this.attachedIFrameResizer = init.iFrameResizer;
                _this.initializePluginApp();
            }
        });
    };
    // Send first message to plugin app to start up 2 way communication
    // TODO send all initialization options here
    PluginAppComponent.prototype.initializePluginApp = function () {
        this.sendMessageToPluginApp('[pluginAppInit]:{"pluginAppOptions": "here"}');
    };
    // Communication with plugin app
    // #############################
    PluginAppComponent.prototype.sendMessageToPluginApp = function (messageToSend) {
        this.attachedIFrameResizer.sendMessage(messageToSend, window.location.origin);
    };
    PluginAppComponent.prototype.receivedMessageFromPluginApp = function (event) {
        this.notificationService.notify(event.message);
    };
    PluginAppComponent = __decorate([
        core_1.Component({
            selector: 'plugin-app',
            styles: ["\n    iframe {\n      width:100%\n    }\n  "],
            template: "\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"sendMessageToPluginApp('manual from source to plugin')\">\n      Send message to plugin app\n    </button>\n    <iframe\n      *ngIf=\"iframeSrc\"\n      [src]=\"iframeSrc\"\n      scrolling=\"no\"\n      frameborder=\"0\"\n      marginheight=\"0\"\n      marginwidth=\"0\">\n    </iframe>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService, notification_service_1.NotificationService, router_1.ActivatedRoute])
    ], PluginAppComponent);
    return PluginAppComponent;
}());
exports.PluginAppComponent = PluginAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbHVnaW4tYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EscUJBQWlDLGVBQ2pDLENBQUMsQ0FEK0M7QUFDaEQsaUNBQXVDLDJCQUN2QyxDQUFDLENBRGlFO0FBQ2xFLHVCQUErQixpQkFFL0IsQ0FBQyxDQUYrQztBQUVoRCxxQ0FBb0MseUJBRXBDLENBQUMsQ0FGNEQ7QUF3QjdEO0lBSUUsNEJBQ1Usc0JBQThDLEVBQzlDLG1CQUF3QyxFQUN4QyxjQUE4QjtRQUY5QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDeEQsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFBO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hGLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUFBLGlCQVlDO1FBWEMsa0RBQWtEO1FBQ2xELFlBQVksQ0FBQztZQUNYLGFBQWE7WUFDYixlQUFlLEVBQUUsVUFBQyxLQUFLO2dCQUNyQixLQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDMUMsQ0FBQztZQUNELFlBQVksRUFBRSxVQUFDLElBQUk7Z0JBQ2pCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFBO2dCQUMvQyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUM1QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG1FQUFtRTtJQUNuRSw0Q0FBNEM7SUFDckMsZ0RBQW1CLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLDhDQUE4QyxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFFekIsbURBQXNCLEdBQTdCLFVBQStCLGFBQWE7UUFDMUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRU0seURBQTRCLEdBQW5DLFVBQXFDLEtBQUs7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQWpFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixNQUFNLEVBQUUsQ0FBQyw2Q0FJUixDQUFDO1lBQ0YsUUFBUSxFQUFFLGdYQWFUO1NBQ0YsQ0FBQzs7MEJBQUE7SUE2Q0YseUJBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLDBCQUFrQixxQkE0QzlCLENBQUEifQ==