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
var notification_service_1 = require('./notification.service');
var TopNavContainer = (function () {
    function TopNavContainer(notificationService) {
        this.notificationService = notificationService;
        notificationService.beep.subscribe(function (res) {
            console.log('NOTIFICATION: ', res);
        });
    }
    TopNavContainer = __decorate([
        core_1.Component({
            selector: 'nav-top',
            styles: ["\n    .navbar-fixed-top {\n      border-bottom: 1px solid #e7e7e7;\n      background-color: #f8f8f8;\n    }\n\n    .navbar-fixed-top .navbar-brand {\n      color: #5e5e5e;\n    }\n  "],
            template: "\n    <nav class=\"navbar navbar-light navbar-fixed-top\">\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\"\n        data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\" id=\"tenant-brand\">\n        Platform Experiment\n      </a>\n\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-right\">\n          <h4><span class=\"tag tag-success\">{{notificationService.beep | async}}</span></h4>\n        </nav>\n      </div>\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService])
    ], TopNavContainer);
    return TopNavContainer;
}());
exports.TopNavContainer = TopNavContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXRvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXYtdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQzFCLENBQUMsQ0FEd0M7QUFDekMscUNBQW9DLHdCQUVwQyxDQUFDLENBRjJEO0FBbUM1RDtJQUNFLHlCQUFxQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUMzRCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXRDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixNQUFNLEVBQUUsQ0FBQyx3TEFTUixDQUFDO1lBQ0YsUUFBUSxFQUFFLGl3QkFtQlQ7U0FDRixDQUFDOzt1QkFBQTtJQU9GLHNCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSx1QkFBZSxrQkFNM0IsQ0FBQSJ9