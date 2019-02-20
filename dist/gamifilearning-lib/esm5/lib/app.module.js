/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatInputModule, MatTableModule, MatToolbarModule, MatBadgeModule, MatListModule, MatProgressSpinnerModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuestionRoomComponent } from './question-room/question-room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { FormsModule } from '@angular/forms';
import { RewardDialogComponent } from './reward-dialog/reward-dialog.component';
import { TranslatePipe } from './shared/translate.pipe';
/** @type {?} */
var MaterialModules = [
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule
];
var GLModule = /** @class */ (function () {
    function GLModule() {
    }
    GLModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        RootComponent,
                        DashboardComponent,
                        LeaderboardComponent,
                        QuestionRoomComponent,
                        NavbarComponent,
                        ChartComponent,
                        ScoreDisplayComponent,
                        RewardDialogComponent,
                        TranslatePipe
                    ],
                    imports: [
                        BrowserModule,
                        BrowserAnimationsModule,
                        MaterialModules,
                        HttpClientModule,
                        FormsModule
                        // NgxChartsModule
                    ],
                    providers: [],
                    bootstrap: [RootComponent],
                    exports: [RootComponent, QuestionRoomComponent, ScoreDisplayComponent],
                    entryComponents: [QuestionRoomComponent, RewardDialogComponent]
                },] }
    ];
    return GLModule;
}());
export { GLModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBSS9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsYUFBYSxFQUNiLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGlCQUFpQixFQUNsQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRWxELGVBQWUsR0FBRztJQUN0QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7Q0FDbEI7QUFFRDtJQUFBO0lBeUJ1QixDQUFDOztnQkF6QnZCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDO29CQUN0RSxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztpQkFDaEU7O0lBQ3NCLGVBQUM7Q0FBQSxBQXpCeEIsSUF5QndCO1NBQVgsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcblxyXG4vLyBpbXBvcnQgeyBOZ3hDaGFydHNNb2R1bGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWNoYXJ0cyc7XHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICBNYXRDYXJkTW9kdWxlLFxyXG4gIE1hdE1lbnVNb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZSxcclxuICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgTWF0VGFibGVNb2R1bGUsXHJcbiAgTWF0VG9vbGJhck1vZHVsZSxcclxuICBNYXRCYWRnZU1vZHVsZSxcclxuICBNYXRMaXN0TW9kdWxlLFxyXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gIE1hdERpYWxvZ01vZHVsZSxcclxuICBNYXRTbmFja0Jhck1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IExlYWRlcmJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvblJvb21Db21wb25lbnQgfSBmcm9tICcuL3F1ZXN0aW9uLXJvb20vcXVlc3Rpb24tcm9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNjb3JlRGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vc2NvcmUtZGlzcGxheS9zY29yZS1kaXNwbGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSZXdhcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3Jld2FyZC1kaWFsb2cvcmV3YXJkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9zaGFyZWQvdHJhbnNsYXRlLnBpcGUnO1xyXG5cclxuY29uc3QgTWF0ZXJpYWxNb2R1bGVzID0gW1xyXG4gIE1hdElucHV0TW9kdWxlLFxyXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gIE1hdENhcmRNb2R1bGUsXHJcbiAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxyXG4gIE1hdE1lbnVNb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZSxcclxuICBMYXlvdXRNb2R1bGUsXHJcbiAgTWF0VGFibGVNb2R1bGUsXHJcbiAgTWF0VG9vbGJhck1vZHVsZSxcclxuICBNYXRCYWRnZU1vZHVsZSxcclxuICBNYXRMaXN0TW9kdWxlLFxyXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gIE1hdERpYWxvZ01vZHVsZSxcclxuICBNYXRTbmFja0Jhck1vZHVsZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJvb3RDb21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBMZWFkZXJib2FyZENvbXBvbmVudCxcclxuICAgIFF1ZXN0aW9uUm9vbUNvbXBvbmVudCxcclxuICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgIENoYXJ0Q29tcG9uZW50LFxyXG4gICAgU2NvcmVEaXNwbGF5Q29tcG9uZW50LFxyXG4gICAgUmV3YXJkRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgVHJhbnNsYXRlUGlwZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGVzLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlXHJcbiAgICAvLyBOZ3hDaGFydHNNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgYm9vdHN0cmFwOiBbUm9vdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1Jvb3RDb21wb25lbnQsIFF1ZXN0aW9uUm9vbUNvbXBvbmVudCwgU2NvcmVEaXNwbGF5Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtRdWVzdGlvblJvb21Db21wb25lbnQsIFJld2FyZERpYWxvZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdMTW9kdWxlIHt9XHJcbiJdfQ==