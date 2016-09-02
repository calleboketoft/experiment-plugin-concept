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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            styles: ["\n    .main {\n      padding: 20px;\n    }\n    @media (min-width: 768px) {\n      .main {\n        padding-right: 40px;\n        padding-left: 40px;\n      }\n    }\n    .main .page-header {\n      margin-top: 0;\n    }\n\n    /* Hide for mobile, show later */\n    .sidebar {\n      display: none;\n    }\n    @media (min-width: 768px) {\n      .sidebar {\n        position: fixed;\n        top: 51px;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        display: block;\n        padding: 20px;\n        overflow-x: hidden;\n        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n        background-color: #f8f8f8;\n        border-right: 1px solid #e7e7e7;\n      }\n    }\n  "],
            template: "\n    <nav-top></nav-top>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <nav-left></nav-left>\n        </div>\n        <div class=\"col-sm-3 col-md-2\"></div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUUxQixDQUFDLENBRndDO0FBc0R6QztJQUFBO0lBQTRCLENBQUM7SUFwRDdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLENBQUMsNnRCQWlDUixDQUFDO1lBQ0YsUUFBUSxFQUFFLDRaQWNUO1NBQ0YsQ0FBQzs7b0JBQUE7SUFDMEIsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSJ9