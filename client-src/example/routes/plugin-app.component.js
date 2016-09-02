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
    function PluginAppComponent(domSanitizer, notificationService, activatedRoute) {
        this.domSanitizer = domSanitizer;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        var pluginAppOptions = this.activatedRoute.data['value'];
        var indexPath = pluginAppOptions.indexPath;
        this.iframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(indexPath);
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
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, notification_service_1.NotificationService, router_1.ActivatedRoute])
    ], PluginAppComponent);
    return PluginAppComponent;
}());
exports.PluginAppComponent = PluginAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbHVnaW4tYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EscUJBQWlDLGVBQ2pDLENBQUMsQ0FEK0M7QUFDaEQsaUNBQTZCLDJCQUM3QixDQUFDLENBRHVEO0FBQ3hELHVCQUErQixpQkFFL0IsQ0FBQyxDQUYrQztBQUVoRCxxQ0FBb0MseUJBRXBDLENBQUMsQ0FGNEQ7QUF3QjdEO0lBSUUsNEJBQ1UsWUFBMEIsRUFDMUIsbUJBQXdDLEVBQ3hDLGNBQThCO1FBRjlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDeEQsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFBO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFBQSxpQkFZQztRQVhDLGtEQUFrRDtRQUNsRCxZQUFZLENBQUM7WUFDWCxhQUFhO1lBQ2IsZUFBZSxFQUFFLFVBQUMsS0FBSztnQkFDckIsS0FBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzFDLENBQUM7WUFDRCxZQUFZLEVBQUUsVUFBQyxJQUFJO2dCQUNqQixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQTtnQkFDL0MsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDNUIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsNENBQTRDO0lBQ3JDLGdEQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO0lBQzdFLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBRXpCLG1EQUFzQixHQUE3QixVQUErQixhQUFhO1FBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQUVNLHlEQUE0QixHQUFuQyxVQUFxQyxLQUFLO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFqRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLENBQUMsNkNBSVIsQ0FBQztZQUNGLFFBQVEsRUFBRSxnWEFhVDtTQUNGLENBQUM7OzBCQUFBO0lBNkNGLHlCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSwwQkFBa0IscUJBNEM5QixDQUFBIn0=