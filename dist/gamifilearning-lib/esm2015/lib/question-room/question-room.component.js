/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { MatSelectionList } from '@angular/material/list';
import { GamificationService } from '../shared/gamification.service';
import { trigger, transition, style, animate, keyframes, useAnimation } from '@angular/animations';
import { pulseAnimation } from '../shared/animations';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RewardDialogComponent } from '../reward-dialog/reward-dialog.component';
/**
 * @record
 */
export function Reward() { }
if (false) {
    /** @type {?} */
    Reward.prototype.position;
    /** @type {?} */
    Reward.prototype.unlocked;
    /** @type {?} */
    Reward.prototype.icon;
}
export class QuestionRoomComponent {
    /**
     * @param {?} question
     * @param {?} gamification
     * @param {?} dialog
     * @param {?} snack
     */
    constructor(question, gamification, dialog, snack) {
        this.question = question;
        this.gamification = gamification;
        this.dialog = dialog;
        this.snack = snack;
        this.currentQuestion = 0;
        this.tempAnswers = [];
        this.showProgressbar = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateRewards();
    }
    /**
     * @return {?}
     */
    isDone() {
        return !(this.done < this.maxProgress);
    }
    /**
     * @param {?} answer
     * @return {?}
     */
    sendAnswer(answer) {
        /** @type {?} */
        const answersToBackend = this.tempAnswers.concat(this.createAnswer(answer));
        this.tempAnswers = [];
        this.question.handleSubmittedAnswers(answersToBackend);
    }
    /**
     * @param {?} reward
     * @return {?}
     */
    claimReward(reward) {
        if (reward.unlocked) {
            this.dialog.open(RewardDialogComponent, {
                data: { total: reward.total }
            });
        }
    }
    /**
     * Handle keyboard interaction
     * Only working hardcoded for binary atm
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (this.answerMode !== 'binary') {
            return false;
        }
        switch (event.key) {
            case 'ArrowLeft':
                this.submitAnswer('yes');
                break;
            case 'ArrowRight':
                this.submitAnswer('no');
                break;
            case 'ArrowUp':
                this.submitAnswer('maybe');
                break;
            default:
                return null;
        }
    }
    /**
     * @private
     * @param {?} answer
     * @return {?}
     */
    createAnswer(answer) {
        /** @type {?} */
        let newAnswer;
        newAnswer = {
            documentId: this.currentInstance.id,
            questionId: this.questions[this.currentQuestion],
            answer: answer
        };
        return newAnswer;
    }
    // Tracking the temp rewards is necessary to react to unlocked rewards
    // This might need an overhaul since it's too complicated
    /**
     * @private
     * @return {?}
     */
    updateRewards() {
        /** @type {?} */
        const locked = this.rewards.filter(reward => reward.unlocked === false);
        /** @type {?} */
        const tmpLocked = locked;
        // Update unlock status flag on all rewards
        locked.forEach(reward => {
            if ((this.done / this.maxProgress) * 100 >= reward.position) {
                reward.unlocked = true;
            }
        });
        this.lockedRewards = this.rewards.filter(reward => reward.unlocked === false);
        if (this.lockedRewards.length < tmpLocked.length) {
            this.claimReward(tmpLocked[0]);
        }
        console.log(this.lockedRewards, tmpLocked);
    }
    /**
     * @param {?} answer
     * @return {?}
     */
    submitAnswer(answer) {
        if (this.currentQuestion + 1 < this.questions.length) {
            this.tempAnswers = [...this.tempAnswers, this.createAnswer(answer)];
            this.currentQuestion++;
        }
        else {
            // One Iteration of Question-Package done
            this.sendAnswer(answer);
            this.currentQuestion = 0;
            this.done++;
            this.updateRewards();
        }
        this.mockAchievementCheck();
    }
    /**
     * @return {?}
     */
    mockAchievementCheck() {
        if (Math.random() < 0.05) {
            /** @type {?} */
            const percent = Math.floor(Math.random() * 25) + 75;
            this.snack.open(percent + '% deiner Kollegen wählten dasselbe 😁', 'OK', {
                duration: 2000
            });
        }
    }
}
QuestionRoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-question-room',
                template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <!-- <i\r\n        *ngIf=\"reward.unlocked;else locked\"\r\n        class=\"fas fa-gift unlocked\"\r\n        matTooltip=\"\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      ></i> -->\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n      <!-- <img\r\n        src=\"assets/gift.png\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        (click)=\"claimReward(reward.unlocked)\"\r\n        matTooltip=\"Noch nicht freigeschalten!\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      /> -->\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\">\r\n    <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #labelingDone>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n        <p>Verarbeite Daten...</p>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-card-header class=\"question-text\">\r\n      <mat-card-title>\r\n        <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'binary'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer | translate }}\r\n        </button>\r\n      </mat-card-actions>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'stars'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer }}\r\n        </button>\r\n        <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n      </mat-card-actions>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n",
                animations: [
                    trigger('fadeIn', [
                        transition(':increment', [
                            animate('300ms', keyframes([
                                style({ opacity: '1' }),
                                style({ opacity: '0' }),
                                style({ opacity: '1' })
                            ]))
                        ])
                    ]),
                    trigger('unlockReward', [
                        transition('false => true', [
                            useAnimation(pulseAnimation, {
                                params: {
                                    timings: '400ms cubic-bezier(.11,.99,.83,.43)',
                                    scale: 1.5
                                }
                            })
                        ])
                    ])
                ],
                styles: [".content{display:-ms-grid;display:grid;-ms-grid-rows:100px 300px 30px 1fr 30px 60px;grid-template-rows:100px 300px 30px 1fr 30px 60px;-ms-grid-columns:1fr;grid-template-columns:1fr}.content:focus{outline:solid 0}.question-text{justify-content:center}.question-text mat-card-title{font-weight:400}.progressbar-container{-ms-grid-row:1;-ms-grid-row-span:1;grid-row:1/2;-ms-grid-row-align:center;align-self:center;position:relative;text-align:center}.progressbar-container mat-progress-bar{margin-bottom:8px}.progressbar-container .reward-icon{display:block;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;color:#9c9c9c}.progressbar-container .unlocked{color:#3f51b5}.progress-label{font-weight:700;line-height:2}.text-card{display:flex;justify-content:center;-ms-grid-row:2;-ms-grid-row-span:1;grid-row:2/3}.question-area{-ms-grid-row:4;-ms-grid-row-span:3;grid-row:4/7}.question-card{-ms-grid-row:4;-ms-grid-row-span:1;grid-row:4/5}.button-list,.submit-button{-ms-grid-row:6;-ms-grid-row-span:1;grid-row:6/7;-ms-grid-row-align:stretch;align-self:stretch;-ms-grid-column-align:stretch;justify-self:stretch}.mat-card-header-text{text-align:center}.answer-buttons-container{display:flex}.answer-buttons-container .yes{flex-grow:1}.answer-buttons-container .maybe{flex-grow:.5}.answer-buttons-container .no{flex-grow:1}.answer-buttons-container .answer-button{height:60px;flex-grow:1}.answer-buttons-container .rating-info{flex-grow:1;color:#9c9c9c}.spinner-container{text-align:center;-ms-grid-row-align:center;align-self:center}.spinner-container mat-spinner{margin:auto}"]
            }] }
];
/** @nocollapse */
QuestionRoomComponent.ctorParameters = () => [
    { type: QuestionService },
    { type: GamificationService },
    { type: MatDialog },
    { type: MatSnackBar }
];
QuestionRoomComponent.propDecorators = {
    maxProgress: [{ type: Input }],
    done: [{ type: Input }],
    currentInstance: [{ type: Input }],
    rewards: [{ type: Input }],
    questions: [{ type: Input }],
    answers: [{ type: Input }],
    showProgressbar: [{ type: Input }],
    answerMode: [{ type: Input }],
    selection: [{ type: ViewChild, args: ['selectionList',] }]
};
if (false) {
    /** @type {?} */
    QuestionRoomComponent.prototype.currentQuestion;
    /** @type {?} */
    QuestionRoomComponent.prototype.tempAnswers;
    /** @type {?} */
    QuestionRoomComponent.prototype.lockedRewards;
    /** @type {?} */
    QuestionRoomComponent.prototype.maxProgress;
    /** @type {?} */
    QuestionRoomComponent.prototype.done;
    /** @type {?} */
    QuestionRoomComponent.prototype.currentInstance;
    /** @type {?} */
    QuestionRoomComponent.prototype.rewards;
    /** @type {?} */
    QuestionRoomComponent.prototype.questions;
    /** @type {?} */
    QuestionRoomComponent.prototype.answers;
    /** @type {?} */
    QuestionRoomComponent.prototype.showProgressbar;
    /** @type {?} */
    QuestionRoomComponent.prototype.answerMode;
    /** @type {?} */
    QuestionRoomComponent.prototype.selection;
    /**
     * @type {?}
     * @private
     */
    QuestionRoomComponent.prototype.question;
    /**
     * @type {?}
     * @private
     */
    QuestionRoomComponent.prototype.gamification;
    /**
     * @type {?}
     * @private
     */
    QuestionRoomComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    QuestionRoomComponent.prototype.snack;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVqRiw0QkFLQzs7O0lBSkMsMEJBQWlCOztJQUNqQiwwQkFBa0I7O0lBRWxCLHNCQUFhOztBQWdDZixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBZ0JoQyxZQUNVLFFBQXlCLEVBQ3pCLFlBQWlDLEVBQ2pDLE1BQWlCLEVBQ2pCLEtBQWtCO1FBSGxCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFuQjVCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxD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R0FBRyxFQUFFLENBQUM7Z0NBQ3ZCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQ0FDdkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDOzZCQUN4QixDQUFDLENBQ0g7eUJBQ0YsQ0FBQztxQkFDSCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxjQUFjLEVBQUU7d0JBQ3RCLFVBQVUsQ0FBQyxlQUFlLEVBQUU7NEJBQzFCLFlBQVksQ0FBQyxjQUFjLEVBQUU7Z0NBQzNCLE1BQU0sRUFBRTtvQ0FDTixPQUFPLEVBQUUscUNBQXFDO29DQUM5QyxLQUFLLEVBQUUsR0FBRztpQ0FDWDs2QkFDRixDQUFDO3lCQUNILENBQUM7cUJBQ0gsQ0FBQztpQkFDSDs7YUFDRjs7OztZQW5EUSxlQUFlO1lBRWYsbUJBQW1CO1lBV25CLFNBQVM7WUFBRSxXQUFXOzs7MEJBNEM1QixLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsU0FBUyxTQUFDLGVBQWU7Ozs7SUFiMUIsZ0RBQW9COztJQUNwQiw0Q0FBMkI7O0lBQzNCLDhDQUFjOztJQUVkLDRDQUE2Qjs7SUFDN0IscUNBQXNCOztJQUN0QixnREFBOEI7O0lBQzlCLHdDQUEyQjs7SUFDM0IsMENBQTZCOztJQUM3Qix3Q0FBMkI7O0lBQzNCLGdEQUFnQzs7SUFDaEMsMkNBQTRCOztJQUU1QiwwQ0FDNEI7Ozs7O0lBRTFCLHlDQUFpQzs7Ozs7SUFDakMsNkNBQXlDOzs7OztJQUN6Qyx1Q0FBeUI7Ozs7O0lBQ3pCLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9xdWVzdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0aW9uTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW5zd2VyLCBCYWNrZW5kUmVzcG9uc2UgfSBmcm9tICcuLi9zaGFyZWQvZGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgdHJhbnNpdGlvbixcclxuICBzdHlsZSxcclxuICBhbmltYXRlLFxyXG4gIGtleWZyYW1lcyxcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgcHVsc2VBbmltYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFJld2FyZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Jld2FyZC1kaWFsb2cvcmV3YXJkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmQge1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgdW5sb2NrZWQ6IGJvb2xlYW47XHJcbiAgLy8gbGFiZWw6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtcXVlc3Rpb24tcm9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzppbmNyZW1lbnQnLCBbXHJcbiAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICczMDBtcycsXHJcbiAgICAgICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSxcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIClcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcigndW5sb2NrUmV3YXJkJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCdmYWxzZSA9PiB0cnVlJywgW1xyXG4gICAgICAgIHVzZUFuaW1hdGlvbihwdWxzZUFuaW1hdGlvbiwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHRpbWluZ3M6ICc0MDBtcyBjdWJpYy1iZXppZXIoLjExLC45OSwuODMsLjQzKScsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGN1cnJlbnRRdWVzdGlvbiA9IDA7XHJcbiAgdGVtcEFuc3dlcnM6IEFuc3dlcltdID0gW107XHJcbiAgbG9ja2VkUmV3YXJkcztcclxuXHJcbiAgQElucHV0KCkgbWF4UHJvZ3Jlc3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBkb25lOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVudEluc3RhbmNlOiBhbnk7XHJcbiAgQElucHV0KCkgcmV3YXJkczogUmV3YXJkW107XHJcbiAgQElucHV0KCkgcXVlc3Rpb25zOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBhbnN3ZXJzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBzaG93UHJvZ3Jlc3NiYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGFuc3dlck1vZGU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2VsZWN0aW9uTGlzdCcpXHJcbiAgc2VsZWN0aW9uOiBNYXRTZWxlY3Rpb25MaXN0O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBnYW1pZmljYXRpb246IEdhbWlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSBzbmFjazogTWF0U25hY2tCYXJcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVSZXdhcmRzKCk7XHJcbiAgfVxyXG5cclxuICBpc0RvbmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISh0aGlzLmRvbmUgPCB0aGlzLm1heFByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gIHNlbmRBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFuc3dlcnNUb0JhY2tlbmQgPSB0aGlzLnRlbXBBbnN3ZXJzLmNvbmNhdCh0aGlzLmNyZWF0ZUFuc3dlcihhbnN3ZXIpKTtcclxuICAgIHRoaXMudGVtcEFuc3dlcnMgPSBbXTtcclxuICAgIHRoaXMucXVlc3Rpb24uaGFuZGxlU3VibWl0dGVkQW5zd2VycyhhbnN3ZXJzVG9CYWNrZW5kKTtcclxuICB9XHJcblxyXG4gIGNsYWltUmV3YXJkKHJld2FyZCkge1xyXG4gICAgaWYgKHJld2FyZC51bmxvY2tlZCkge1xyXG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKFJld2FyZERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgIGRhdGE6IHsgdG90YWw6IHJld2FyZC50b3RhbCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIGtleWJvYXJkIGludGVyYWN0aW9uXHJcbiAgICogT25seSB3b3JraW5nIGhhcmRjb2RlZCBmb3IgYmluYXJ5IGF0bVxyXG4gICAqL1xyXG4gIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hbnN3ZXJNb2RlICE9PSAnYmluYXJ5Jykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgIHRoaXMuc3VibWl0QW5zd2VyKCd5ZXMnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ25vJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMuc3VibWl0QW5zd2VyKCdtYXliZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpOiBBbnN3ZXIge1xyXG4gICAgbGV0IG5ld0Fuc3dlcjogQW5zd2VyO1xyXG4gICAgbmV3QW5zd2VyID0ge1xyXG4gICAgICBkb2N1bWVudElkOiB0aGlzLmN1cnJlbnRJbnN0YW5jZS5pZCxcclxuICAgICAgcXVlc3Rpb25JZDogdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLFxyXG4gICAgICBhbnN3ZXI6IGFuc3dlclxyXG4gICAgfTtcclxuICAgIHJldHVybiBuZXdBbnN3ZXI7XHJcbiAgfVxyXG5cclxuICAvLyBUcmFja2luZyB0aGUgdGVtcCByZXdhcmRzIGlzIG5lY2Vzc2FyeSB0byByZWFjdCB0byB1bmxvY2tlZCByZXdhcmRzXHJcbiAgLy8gVGhpcyBtaWdodCBuZWVkIGFuIG92ZXJoYXVsIHNpbmNlIGl0J3MgdG9vIGNvbXBsaWNhdGVkXHJcbiAgcHJpdmF0ZSB1cGRhdGVSZXdhcmRzKCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gdGhpcy5yZXdhcmRzLmZpbHRlcihyZXdhcmQgPT4gcmV3YXJkLnVubG9ja2VkID09PSBmYWxzZSk7XHJcbiAgICBjb25zdCB0bXBMb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICAvLyBVcGRhdGUgdW5sb2NrIHN0YXR1cyBmbGFnIG9uIGFsbCByZXdhcmRzXHJcbiAgICBsb2NrZWQuZm9yRWFjaChyZXdhcmQgPT4ge1xyXG4gICAgICBpZiAoKHRoaXMuZG9uZSAvIHRoaXMubWF4UHJvZ3Jlc3MpICogMTAwID49IHJld2FyZC5wb3NpdGlvbikge1xyXG4gICAgICAgIHJld2FyZC51bmxvY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2NrZWRSZXdhcmRzID0gdGhpcy5yZXdhcmRzLmZpbHRlcihcclxuICAgICAgcmV3YXJkID0+IHJld2FyZC51bmxvY2tlZCA9PT0gZmFsc2VcclxuICAgICk7XHJcbiAgICBpZiAodGhpcy5sb2NrZWRSZXdhcmRzLmxlbmd0aCA8IHRtcExvY2tlZC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jbGFpbVJld2FyZCh0bXBMb2NrZWRbMF0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2NrZWRSZXdhcmRzLCB0bXBMb2NrZWQpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0QW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gKyAxIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudGVtcEFuc3dlcnMgPSBbLi4udGhpcy50ZW1wQW5zd2VycywgdGhpcy5jcmVhdGVBbnN3ZXIoYW5zd2VyKV07XHJcbiAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPbmUgSXRlcmF0aW9uIG9mIFF1ZXN0aW9uLVBhY2thZ2UgZG9uZVxyXG4gICAgICB0aGlzLnNlbmRBbnN3ZXIoYW5zd2VyKTtcclxuICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmRvbmUrKztcclxuICAgICAgdGhpcy51cGRhdGVSZXdhcmRzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vY2tBY2hpZXZlbWVudENoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBtb2NrQWNoaWV2ZW1lbnRDaGVjaygpIHtcclxuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wNSkge1xyXG4gICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICsgNzU7XHJcbiAgICAgIHRoaXMuc25hY2sub3BlbihwZXJjZW50ICsgJyUgZGVpbmVyIEtvbGxlZ2VuIHfDpGhsdGVuIGRhc3NlbGJlIPCfmIEnLCAnT0snLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==