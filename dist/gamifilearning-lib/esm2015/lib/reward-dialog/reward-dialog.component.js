/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { GamificationService } from '../shared/gamification.service';
import { MAT_DIALOG_DATA } from '@angular/material';
export class RewardDialogComponent {
    /**
     * @param {?} gamification
     * @param {?} data
     */
    constructor(gamification, data) {
        this.gamification = gamification;
        this.data = data;
        this.trivia = this.gamification.getTrivia();
        this.thanksPic = this.gamification.getRandomGif('thanks');
        this.moneyPic = this.gamification.getRandomGif('money');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.total = this.data.total;
    }
}
RewardDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-reward-dialog',
                template: "<h2 mat-dialog-title>Wohoo!</h2>\n<mat-dialog-content>\n  <p>\n    Du hast weitere 5 Euro verdient! Damit hast du insgesamt\n    <b>{{ total }} Euro</b> auf dem Konto!\n  </p>\n  <img src=\"{{ (moneyPic | async)?.images.original.url }}\" />\n  <div *ngIf=\"(trivia | async)\">\n    <h3>Hast du gewusst?</h3>\n    <p>{{ trivia | async }}</p>\n  </div>\n\n  <!-- <h2>And also</h2>\n  <img\n    src=\"{{ (thanksPic | async)?.images.original.url }}\"\n    alt=\"Belohnungs-GIF\"\n    width=\"75%\"\n  /> -->\n</mat-dialog-content>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
RewardDialogComponent.ctorParameters = () => [
    { type: GamificationService },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    RewardDialogComponent.prototype.trivia;
    /** @type {?} */
    RewardDialogComponent.prototype.thanksPic;
    /** @type {?} */
    RewardDialogComponent.prototype.moneyPic;
    /** @type {?} */
    RewardDialogComponent.prototype.total;
    /**
     * @type {?}
     * @private
     */
    RewardDialogComponent.prototype.gamification;
    /** @type {?} */
    RewardDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcmV3YXJkLWRpYWxvZy9yZXdhcmQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBS2hDLFlBQ1UsWUFBaUMsRUFDVCxJQUFTO1FBRGpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNULFNBQUksR0FBSixJQUFJLENBQUs7UUFOM0MsV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELGFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUtoRCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw0aEJBQTZDOzthQUU5Qzs7OztZQVBRLG1CQUFtQjs0Q0FldkIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFOekIsdUNBQXVDOztJQUN2QywwQ0FBcUQ7O0lBQ3JELHlDQUFtRDs7SUFDbkQsc0NBQU07Ozs7O0lBRUosNkNBQXlDOztJQUN6QyxxQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtcmV3YXJkLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXdhcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmV3YXJkLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJld2FyZERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRyaXZpYSA9IHRoaXMuZ2FtaWZpY2F0aW9uLmdldFRyaXZpYSgpO1xuICB0aGFua3NQaWMgPSB0aGlzLmdhbWlmaWNhdGlvbi5nZXRSYW5kb21HaWYoJ3RoYW5rcycpO1xuICBtb25leVBpYyA9IHRoaXMuZ2FtaWZpY2F0aW9uLmdldFJhbmRvbUdpZignbW9uZXknKTtcbiAgdG90YWw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ2FtaWZpY2F0aW9uOiBHYW1pZmljYXRpb25TZXJ2aWNlLFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRvdGFsID0gdGhpcy5kYXRhLnRvdGFsO1xuICB9XG59XG4iXX0=