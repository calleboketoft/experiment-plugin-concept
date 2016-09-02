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
var NotificationService = (function () {
    function NotificationService() {
        this.beep = new core_1.EventEmitter();
    }
    NotificationService.prototype.notify = function (message) {
        this.beep.next(message);
    };
    NotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBRXpDLENBQUMsQ0FGdUQ7QUFHeEQ7SUFBQTtRQUNTLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQTtJQUtsQyxDQUFDO0lBSFEsb0NBQU0sR0FBYixVQUFlLE9BQU87UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQU5IO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFPYiwwQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksMkJBQW1CLHNCQU0vQixDQUFBIn0=