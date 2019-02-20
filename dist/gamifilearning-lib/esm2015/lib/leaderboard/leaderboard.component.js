/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class LeaderboardComponent {
    constructor() {
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
    ngOnInit() { }
}
LeaderboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-leaderboard',
                template: "<table mat-table [dataSource]=\"users\">\r\n  <ng-container matColumnDef=\"rank\">\r\n    <th mat-header-cell *matHeaderCellDef> Rank </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.rank}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"userName\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"score\">\r\n    <th mat-header-cell *matHeaderCellDef> Score </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.score}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\r\n</table>",
                styles: ["table{width:100%}"]
            }] }
];
/** @nocollapse */
LeaderboardComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LeaderboardComponent.prototype.columnsToDisplay;
    /** @type {?} */
    LeaderboardComponent.prototype.users;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxNQUFNLE9BQU8sb0JBQW9CO0lBVS9CO1FBVEEscUJBQWdCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWpELFVBQUssR0FBRztZQUNOLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN6QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7U0FDekMsQ0FBQztJQUVhLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQWpCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsb3hCQUEyQzs7YUFFNUM7Ozs7OztJQUVDLGdEQUFpRDs7SUFFakQscUNBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1sZWFkZXJib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZWFkZXJib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29sdW1uc1RvRGlzcGxheSA9IFsncmFuaycsICd1c2VyTmFtZScsICdzY29yZSddO1xyXG5cclxuICB1c2VycyA9IFtcclxuICAgIHsgbmFtZTogJ1BoaWwnLCByYW5rOiAnMScsIHNjb3JlOiAnNTU1JyB9LFxyXG4gICAgeyBuYW1lOiAnTWlsbCcsIHJhbms6ICcyJywgc2NvcmU6ICc0NDQnIH0sXHJcbiAgICB7IG5hbWU6ICdCaWxsJywgcmFuazogJzMnLCBzY29yZTogJzMzMycgfSxcclxuICAgIHsgbmFtZTogJ1RpbCcsIHJhbms6ICc0Jywgc2NvcmU6ICcyMjInIH1cclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=