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
const MaterialModules = [
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
export class GLModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBSS9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsYUFBYSxFQUNiLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGlCQUFpQixFQUNsQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O01BRWxELGVBQWUsR0FBRztJQUN0QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7Q0FDbEI7QUEyQkQsTUFBTSxPQUFPLFFBQVE7OztZQXpCcEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3RFLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDO2FBQ2hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbi8vIGltcG9ydCB7IE5neENoYXJ0c01vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtY2hhcnRzJztcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxyXG4gIE1hdENhcmRNb2R1bGUsXHJcbiAgTWF0TWVudU1vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlLFxyXG4gIE1hdEJ1dHRvbk1vZHVsZSxcclxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuICBNYXRJbnB1dE1vZHVsZSxcclxuICBNYXRUYWJsZU1vZHVsZSxcclxuICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gIE1hdEJhZGdlTW9kdWxlLFxyXG4gIE1hdExpc3RNb2R1bGUsXHJcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gIE1hdFNuYWNrQmFyTW9kdWxlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgTGVhZGVyYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQvY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2NvcmVEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9zY29yZS1kaXNwbGF5L3Njb3JlLWRpc3BsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJld2FyZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcmV3YXJkLWRpYWxvZy9yZXdhcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3NoYXJlZC90cmFuc2xhdGUucGlwZSc7XHJcblxyXG5jb25zdCBNYXRlcmlhbE1vZHVsZXMgPSBbXHJcbiAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgTWF0Q2FyZE1vZHVsZSxcclxuICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgTWF0TWVudU1vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlLFxyXG4gIExheW91dE1vZHVsZSxcclxuICBNYXRUYWJsZU1vZHVsZSxcclxuICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gIE1hdEJhZGdlTW9kdWxlLFxyXG4gIE1hdExpc3RNb2R1bGUsXHJcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gIE1hdFNuYWNrQmFyTW9kdWxlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUm9vdENvbXBvbmVudCxcclxuICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgIExlYWRlcmJvYXJkQ29tcG9uZW50LFxyXG4gICAgUXVlc3Rpb25Sb29tQ29tcG9uZW50LFxyXG4gICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgQ2hhcnRDb21wb25lbnQsXHJcbiAgICBTY29yZURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBSZXdhcmREaWFsb2dDb21wb25lbnQsXHJcbiAgICBUcmFuc2xhdGVQaXBlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1vZHVsZXMsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICAgIC8vIE5neENoYXJ0c01vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtSb290Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUm9vdENvbXBvbmVudCwgUXVlc3Rpb25Sb29tQ29tcG9uZW50LCBTY29yZURpc3BsYXlDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1F1ZXN0aW9uUm9vbUNvbXBvbmVudCwgUmV3YXJkRGlhbG9nQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR0xNb2R1bGUge31cclxuIl19