/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulseAnimation } from '../shared/animations';
import { GamificationService } from '../shared/gamification.service';
var ScoreDisplayComponent = /** @class */ (function () {
    function ScoreDisplayComponent(gamification) {
        this.gamification = gamification;
    }
    /**
     * @return {?}
     */
    ScoreDisplayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ScoreDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-score-display',
                    template: "<div class=\"align-vert\" [@scoreChange]=\"gamification.score$ | async\">\r\n  <mat-icon>star</mat-icon>\r\n  <span>{{ gamification.score$ | async }}</span>\r\n</div>\r\n",
                    animations: [
                        trigger('scoreChange', [
                            transition(':increment', useAnimation(pulseAnimation, {
                                params: {
                                    timings: '400ms cubic-bezier(.11,.99,.83,.43)',
                                    scale: 1.25
                                }
                            }))
                        ])
                    ],
                    styles: [".align-vert{display:inline-flex;vertical-align:middle;align-items:center}"]
                }] }
    ];
    /** @nocollapse */
    ScoreDisplayComponent.ctorParameters = function () { return [
        { type: GamificationService }
    ]; };
    return ScoreDisplayComponent;
}());
export { ScoreDisplayComponent };
if (false) {
    /** @type {?} */
    ScoreDisplayComponent.prototype.gamification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2NvcmUtZGlzcGxheS9zY29yZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckU7SUFtQkUsK0JBQW1CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUFHLENBQUM7Ozs7SUFFeEQsd0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBckJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixzTEFBNkM7b0JBRTdDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsYUFBYSxFQUFFOzRCQUNyQixVQUFVLENBQ1IsWUFBWSxFQUNaLFlBQVksQ0FBQyxjQUFjLEVBQUU7Z0NBQzNCLE1BQU0sRUFBRTtvQ0FDTixPQUFPLEVBQUUscUNBQXFDO29DQUM5QyxLQUFLLEVBQUUsSUFBSTtpQ0FDWjs2QkFDRixDQUFDLENBQ0g7eUJBQ0YsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7Z0JBbkJRLG1CQUFtQjs7SUF3QjVCLDRCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FKWSxxQkFBcUI7OztJQUNwQiw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgcHVsc2VBbmltYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEdhbWlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ2FtaWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zY29yZS1kaXNwbGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2NvcmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2NvcmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Njb3JlQ2hhbmdlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICc6aW5jcmVtZW50JyxcclxuICAgICAgICB1c2VBbmltYXRpb24ocHVsc2VBbmltYXRpb24sIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICB0aW1pbmdzOiAnNDAwbXMgY3ViaWMtYmV6aWVyKC4xMSwuOTksLjgzLC40MyknLFxyXG4gICAgICAgICAgICBzY2FsZTogMS4yNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NvcmVEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FtaWZpY2F0aW9uOiBHYW1pZmljYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19