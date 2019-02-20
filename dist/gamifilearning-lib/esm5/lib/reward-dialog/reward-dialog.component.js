/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { GamificationService } from '../shared/gamification.service';
import { MAT_DIALOG_DATA } from '@angular/material';
var RewardDialogComponent = /** @class */ (function () {
    function RewardDialogComponent(gamification, data) {
        this.gamification = gamification;
        this.data = data;
        this.trivia = this.gamification.getTrivia();
        this.thanksPic = this.gamification.getRandomGif('thanks');
        this.moneyPic = this.gamification.getRandomGif('rich');
    }
    /**
     * @return {?}
     */
    RewardDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.total = this.data.total;
    };
    RewardDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-reward-dialog',
                    template: "<h2 mat-dialog-title>Wohoo!</h2>\n<mat-dialog-content>\n  <p>\n    Du hast weitere 5 Euro verdient! Damit hast du insgesamt\n    <b>{{ total }} Euro</b> auf dem Konto!\n  </p>\n  <img src=\"{{ (moneyPic | async)?.images.original.url }}\" />\n  <h3>Hast du gewusst?</h3>\n  <p>{{ trivia | async }}</p>\n  <!-- <h2>And also</h2>\n  <img\n    src=\"{{ (thanksPic | async)?.images.original.url }}\"\n    alt=\"Belohnungs-GIF\"\n    width=\"75%\"\n  /> -->\n</mat-dialog-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RewardDialogComponent.ctorParameters = function () { return [
        { type: GamificationService },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return RewardDialogComponent;
}());
export { RewardDialogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV3YXJkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcmV3YXJkLWRpYWxvZy9yZXdhcmQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBEO0lBVUUsK0JBQ1UsWUFBaUMsRUFDVCxJQUFTO1FBRGpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNULFNBQUksR0FBSixJQUFJLENBQUs7UUFOM0MsV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELGFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUsvQyxDQUFDOzs7O0lBRUosd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHdlQUE2Qzs7aUJBRTlDOzs7O2dCQVBRLG1CQUFtQjtnREFldkIsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSxxQkFBcUI7OztJQUNoQyx1Q0FBdUM7O0lBQ3ZDLDBDQUFxRDs7SUFDckQseUNBQWtEOztJQUNsRCxzQ0FBTTs7Ozs7SUFFSiw2Q0FBeUM7O0lBQ3pDLHFDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbWlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ2FtaWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1yZXdhcmQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jld2FyZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXdhcmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmV3YXJkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdHJpdmlhID0gdGhpcy5nYW1pZmljYXRpb24uZ2V0VHJpdmlhKCk7XG4gIHRoYW5rc1BpYyA9IHRoaXMuZ2FtaWZpY2F0aW9uLmdldFJhbmRvbUdpZigndGhhbmtzJyk7XG4gIG1vbmV5UGljID0gdGhpcy5nYW1pZmljYXRpb24uZ2V0UmFuZG9tR2lmKCdyaWNoJyk7XG4gIHRvdGFsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdhbWlmaWNhdGlvbjogR2FtaWZpY2F0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b3RhbCA9IHRoaXMuZGF0YS50b3RhbDtcbiAgfVxufVxuIl19