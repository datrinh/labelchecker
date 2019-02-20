/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GamificationService } from '../shared/gamification.service';
import { UserService } from '../shared/user.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(user, gamificationService) {
        this.user = user;
        this.gamificationService = gamificationService;
        this.gamification = this.gamificationService;
    }
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-navbar',
                    template: "<!--\r\n  <mat-toolbar color=\"primary\">\r\n    <span class=\"spacer\"></span>\r\n\r\n    <div *ngIf=\"user.isLogged(); else: notLogged\">\r\n      <gl-score-display></gl-score-display>\r\n      <button [matMenuTriggerFor]=\"menu\" class=\"toolbar-item\" mat-icon-button>\r\n        <mat-icon matBadge=\"4\" matBadgeColor=\"accent\">person</mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <ng-template #notLogged> <button mat-button>Login</button> </ng-template>\r\n  </mat-toolbar>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item disabled>Kontostand</button>\r\n    <button mat-menu-item disabled>Katzenvideos</button>\r\n    <button\r\n      mat-menu-item\r\n      routerLinkActive=\"router-link-active\"\r\n      (click)=\"user.logout()\"\r\n    >\r\n      Logout\r\n    </button>\r\n  </mat-menu>\r\n-->\r\n",
                    styles: [".spacer{flex:1 1 auto}.toolbar-item{margin:0 14px}"]
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: GamificationService }
    ]; };
    return NavbarComponent;
}());
export { NavbarComponent };
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.gamification;
    /** @type {?} */
    NavbarComponent.prototype.user;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype.gamificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQ7SUFPRSx5QkFDUyxJQUFpQixFQUNoQixtQkFBd0M7UUFEekMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBSGxELGlCQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBSXJDLENBQUM7Ozs7SUFFSixrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFaZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDYwQkFBc0M7O2lCQUV2Qzs7OztnQkFOUSxXQUFXO2dCQURYLG1CQUFtQjs7SUFnQjVCLHNCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksZUFBZTs7O0lBQzFCLHVDQUF3Qzs7SUFFdEMsK0JBQXdCOzs7OztJQUN4Qiw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtbmF2YmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBnYW1pZmljYXRpb24gPSB0aGlzLmdhbWlmaWNhdGlvblNlcnZpY2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGdhbWlmaWNhdGlvblNlcnZpY2U6IEdhbWlmaWNhdGlvblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=