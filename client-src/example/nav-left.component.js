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
var NavLeftComponent = (function () {
    function NavLeftComponent() {
        this.pluginApps = window['ssgPluginApps'].routes;
    }
    NavLeftComponent = __decorate([
        core_1.Component({
            selector: 'nav-left',
            styles: ["\n    .nav-sidebar {\n      margin-right: -21px; /* 20px padding + 1px border */\n      margin-bottom: 20px;\n      margin-left: -20px;\n    }\n\n    li {\n      border-bottom: 1px solid #e7e7e7;\n    }\n\n    i {\n      margin-right: 5px;\n    }\n\n    a,\n    .link-section-header {\n      padding: 5px 15px;\n      display: block;\n    }\n\n    a:hover,\n    a:focus,\n    a:active {\n      background-color: #eee;\n      text-decoration: none;\n    }\n  "],
            template: "\n    <ul class=\"nav nav-sidebar\">\n      <li>\n        <span class=\"link-section-header\">\n          <strong>Platform</strong>\n        </span>\n      </li>\n      <li>\n        <a [routerLink]=\"['home']\">\n          Home\n        </a>\n      </li>\n      <br>\n      <li>\n        <span class=\"link-section-header\">\n          <strong>Plugin Apps</strong>\n        </span>\n      </li>\n\n      <!-- Generated links for plugin apps -->\n      <li *ngFor=\"let pluginApp of pluginApps\">\n        <a [routerLink]=\"[pluginApp.path]\">\n          {{pluginApp.data.linkTitle}}\n        </a>\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavLeftComponent);
    return NavLeftComponent;
}());
exports.NavLeftComponent = NavLeftComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxlZnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2LWxlZnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFFMUIsQ0FBQyxDQUZ3QztBQTREekM7SUFBQTtRQUNTLGVBQVUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JELENBQUM7SUE1REQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLENBQUMsNGNBMkJSLENBQUM7WUFDRixRQUFRLEVBQUUsbW5CQTBCVDtTQUNGLENBQUM7O3dCQUFBO0lBR0YsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHdCQUFnQixtQkFFNUIsQ0FBQSJ9