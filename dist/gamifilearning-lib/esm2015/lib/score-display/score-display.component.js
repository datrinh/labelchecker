/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulseAnimation } from '../shared/animations';
import { GamificationService } from '../shared/gamification.service';
export class ScoreDisplayComponent {
    /**
     * @param {?} gamification
     */
    constructor(gamification) {
        this.gamification = gamification;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
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
ScoreDisplayComponent.ctorParameters = () => [
    { type: GamificationService }
];
if (false) {
    /** @type {?} */
    ScoreDisplayComponent.prototype.gamification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2NvcmUtZGlzcGxheS9zY29yZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFvQnJFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFDaEMsWUFBbUIsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQUcsQ0FBQzs7OztJQUV4RCxRQUFRLEtBQUksQ0FBQzs7O1lBckJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixzTEFBNkM7Z0JBRTdDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsYUFBYSxFQUFFO3dCQUNyQixVQUFVLENBQ1IsWUFBWSxFQUNaLFlBQVksQ0FBQyxjQUFjLEVBQUU7NEJBQzNCLE1BQU0sRUFBRTtnQ0FDTixPQUFPLEVBQUUscUNBQXFDO2dDQUM5QyxLQUFLLEVBQUUsSUFBSTs2QkFDWjt5QkFDRixDQUFDLENBQ0g7cUJBQ0YsQ0FBQztpQkFDSDs7YUFDRjs7OztZQW5CUSxtQkFBbUI7Ozs7SUFxQmQsNkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IHB1bHNlQW5pbWF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2NvcmUtZGlzcGxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Njb3JlLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Njb3JlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdzY29yZUNoYW5nZScsIFtcclxuICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAnOmluY3JlbWVudCcsXHJcbiAgICAgICAgdXNlQW5pbWF0aW9uKHB1bHNlQW5pbWF0aW9uLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgdGltaW5nczogJzQwMG1zIGN1YmljLWJlemllciguMTEsLjk5LC44MywuNDMpJyxcclxuICAgICAgICAgICAgc2NhbGU6IDEuMjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNjb3JlRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGdhbWlmaWNhdGlvbjogR2FtaWZpY2F0aW9uU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==