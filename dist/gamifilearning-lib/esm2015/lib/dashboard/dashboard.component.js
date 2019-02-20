/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class DashboardComponent {
    constructor() {
        this.cards = [
            { title: 'Card 1', cols: 1, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 1 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
}
DashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-dashboard',
                template: "<div class=\"grid-container\">\r\n  <h1 class=\"mat-h1\">Dashboard</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Leaderboard\r\n            <button\r\n              mat-icon-button\r\n              class=\"more-button\"\r\n              [matMenuTriggerFor]=\"menu\"\r\n              aria-label=\"Toggle menu\"\r\n            >\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Expand</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <!-- <app-leaderboard></app-leaderboard> -->\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{ card.title }}\r\n            <button\r\n              mat-icon-button\r\n              class=\"more-button\"\r\n              [matMenuTriggerFor]=\"menu\"\r\n              aria-label=\"Toggle menu\"\r\n            >\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Expand</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div>Card Content Here</div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n",
                styles: [".grid-container{padding:20px}.dashboard-card{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button{position:absolute;top:5px;right:10px}"]
            }] }
];
/** @nocollapse */
DashboardComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DashboardComponent.prototype.cards;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8xQyxNQUFNLE9BQU8sa0JBQWtCO0lBUTdCO1FBUEEsVUFBSyxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNyQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDckMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtTQUN0QyxDQUFDO0lBRWEsQ0FBQzs7O1lBYmpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsKytEQUF5Qzs7YUFFMUM7Ozs7OztJQUVDLG1DQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLWRhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XHJcbiAgY2FyZHMgPSBbXHJcbiAgICB7IHRpdGxlOiAnQ2FyZCAxJywgY29sczogMSwgcm93czogMSB9LFxyXG4gICAgeyB0aXRsZTogJ0NhcmQgMicsIGNvbHM6IDEsIHJvd3M6IDEgfSxcclxuICAgIHsgdGl0bGU6ICdDYXJkIDMnLCBjb2xzOiAxLCByb3dzOiAxIH0sXHJcbiAgICB7IHRpdGxlOiAnQ2FyZCA0JywgY29sczogMSwgcm93czogMSB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==