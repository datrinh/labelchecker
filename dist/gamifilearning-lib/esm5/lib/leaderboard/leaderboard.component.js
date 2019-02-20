/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent() {
        this.columnsToDisplay = ['rank', 'userName', 'score'];
        this.users = [
            { name: 'Phil', rank: '1', score: '555' },
            { name: 'Mill', rank: '2', score: '444' },
            { name: 'Bill', rank: '3', score: '333' },
            { name: 'Til', rank: '4', score: '222' }
        ];
    }
    /**
     * @return {?}
     */
    LeaderboardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LeaderboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-leaderboard',
                    template: "<table mat-table [dataSource]=\"users\">\r\n  <ng-container matColumnDef=\"rank\">\r\n    <th mat-header-cell *matHeaderCellDef> Rank </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.rank}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"userName\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"score\">\r\n    <th mat-header-cell *matHeaderCellDef> Score </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.score}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\r\n</table>",
                    styles: ["table{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    LeaderboardComponent.ctorParameters = function () { return []; };
    return LeaderboardComponent;
}());
export { LeaderboardComponent };
if (false) {
    /** @type {?} */
    LeaderboardComponent.prototype.columnsToDisplay;
    /** @type {?} */
    LeaderboardComponent.prototype.users;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQWVFO1FBVEEscUJBQWdCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWpELFVBQUssR0FBRztZQUNOLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN6QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7U0FDekMsQ0FBQztJQUVhLENBQUM7Ozs7SUFFaEIsdUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBakJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixveEJBQTJDOztpQkFFNUM7Ozs7SUFjRCwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksb0JBQW9COzs7SUFDL0IsZ0RBQWlEOztJQUVqRCxxQ0FLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLWxlYWRlcmJvYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGVhZGVyYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExlYWRlcmJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb2x1bW5zVG9EaXNwbGF5ID0gWydyYW5rJywgJ3VzZXJOYW1lJywgJ3Njb3JlJ107XHJcblxyXG4gIHVzZXJzID0gW1xyXG4gICAgeyBuYW1lOiAnUGhpbCcsIHJhbms6ICcxJywgc2NvcmU6ICc1NTUnIH0sXHJcbiAgICB7IG5hbWU6ICdNaWxsJywgcmFuazogJzInLCBzY29yZTogJzQ0NCcgfSxcclxuICAgIHsgbmFtZTogJ0JpbGwnLCByYW5rOiAnMycsIHNjb3JlOiAnMzMzJyB9LFxyXG4gICAgeyBuYW1lOiAnVGlsJywgcmFuazogJzQnLCBzY29yZTogJzIyMicgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==