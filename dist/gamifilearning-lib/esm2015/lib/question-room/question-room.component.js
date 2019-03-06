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
     * @param {?} dialog
     * @param {?} snack
     * @param {?} gf
     */
    constructor(question, dialog, snack, gf) {
        this.question = question;
        this.dialog = dialog;
        this.snack = snack;
        this.gf = gf;
        this.currentQuestion = 0;
        this.tempAnswers = [];
        this.isLoading = true;
        this.showProgressbar = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.doUpdateRewards();
        this.thanksGif = this.gf.getRandomGif('party');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.done) {
            this.doUpdateRewards();
        }
        if (changes.currentInstance) {
            this.isLoading = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.currentInstance.text = '';
    }
    /**
     * @return {?}
     */
    isDone() {
        return this.done != null && this.done >= this.maxProgress;
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
        this.doUpdateRewards();
        this.lockedRewards = this.rewards.filter(reward => reward.unlocked === false);
        if (this.lockedRewards.length < tmpLocked.length) {
            this.claimReward(tmpLocked[0]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    doUpdateRewards() {
        /** @type {?} */
        const locked = this.rewards.filter(reward => reward.unlocked === false);
        // Update unlock status flag on all rewards
        locked.forEach(reward => {
            if ((this.done / this.maxProgress) * 100 >= reward.position) {
                reward.unlocked = true;
                // console.log(reward);
            }
        });
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
            this.isLoading = true;
            // One Iteration of Question-Package done
            this.sendAnswer(answer);
            this.currentQuestion = 0;
            this.done++;
            this.updateRewards();
        }
        // this.mockAchievementCheck();
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
    /**
     * @return {?}
     */
    finish() {
        window.open('https://goo.gl/forms/BzagdIsUOy6hA2wB2', '_blank');
    }
}
QuestionRoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-question-room',
                template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\" *ngIf=\"!isDone(); else lablingDone\">\r\n    <!-- <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\"> -->\r\n    <p *ngIf=\"!isLoading; else loading\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #loading>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <ng-template #lablingDone>\r\n    <mat-card class=\"labeling-done-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Du hast es geschafft!</mat-card-title>\r\n      </mat-card-header>\r\n      <img\r\n        mat-card-image\r\n        src=\"{{ (thanksGif | async)?.images.original.url }}\"\r\n      />\r\n      <mat-card-content>\r\n        <p>\r\n          Du hast die letzten 5 Euro verdient! Damit hast du insgesamt\r\n          <b>75 Euro</b> auf dem Konto!\r\n        </p>\r\n        <p>\r\n          But wait! Um Deine Arbeit abzuschlie\u00DFen, nimm dir bitte noch 1-2\r\n          Minuten f\u00FCr diesen Fragebogen.\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"finish()\"\r\n          style=\"width: 100%\"\r\n          color=\"primary\"\r\n        >\r\n          Arbeit abschlie\u00DFen\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </ng-template>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ ((currentQuestion + 1) / questions.length) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div class=\"question-card-wrapper\">\r\n      <mat-card-header class=\"question-text\">\r\n        <mat-card-title>\r\n          <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-card-actions\r\n          *ngIf=\"answerMode === 'binary'\"\r\n          class=\"answer-buttons-container\"\r\n        >\r\n          <button\r\n            mat-button\r\n            *ngFor=\"let answer of answers\"\r\n            class=\"answer-button\"\r\n            [ngClass]=\"answer\"\r\n            (click)=\"submitAnswer(answer)\"\r\n          >\r\n            {{ answer | translate }}\r\n          </button>\r\n        </mat-card-actions>\r\n        <mat-card-actions\r\n          *ngIf=\"answerMode === 'stars'\"\r\n          class=\"answer-buttons-container\"\r\n        >\r\n          <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n          <button\r\n            mat-button\r\n            *ngFor=\"let answer of answers\"\r\n            class=\"answer-button\"\r\n            [ngClass]=\"answer\"\r\n            (click)=\"submitAnswer(answer)\"\r\n            [disabled]=\"isLoading\"\r\n          >\r\n            {{ answer | translate }}\r\n          </button>\r\n          <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n        </mat-card-actions>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</section>\r\n",
                animations: [
                    trigger('fadeIn', [
                        transition(':increment', [
                            animate('500ms', keyframes([
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
                styles: [".content{display:-ms-grid;display:grid;-ms-grid-rows:100px 400px 30px 1fr 30px 60px;grid-template-rows:100px 400px 30px 1fr 30px 60px;-ms-grid-columns:1fr;grid-template-columns:1fr}.content:focus{outline:solid 0}.question-text{justify-content:center}.question-text mat-card-title{font-weight:400}.question-card-wrapper{padding:16px 16px 0}.progressbar-container{-ms-grid-row:1;-ms-grid-row-span:1;grid-row:1/2;-ms-grid-row-align:center;align-self:center;position:relative;text-align:center}.progressbar-container mat-progress-bar{margin-bottom:8px}.progressbar-container .reward-icon{display:block;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;color:#9c9c9c}.progressbar-container .unlocked{color:#3f51b5}.progress-label{font-weight:700;line-height:2}.text-card{display:flex;justify-content:center;-ms-grid-row:2;-ms-grid-row-span:1;grid-row:2/3;overflow:auto}.text-card p{white-space:pre-line;width:100%}.question-area{-ms-grid-row:4;-ms-grid-row-span:3;grid-row:4/7}.question-card{-ms-grid-row:4;-ms-grid-row-span:1;grid-row:4/5;padding:0}.button-list,.submit-button{-ms-grid-row:6;-ms-grid-row-span:1;grid-row:6/7;-ms-grid-row-align:stretch;align-self:stretch;-ms-grid-column-align:stretch;justify-self:stretch}.mat-card-header-text{text-align:center}.answer-buttons-container{display:flex}.answer-buttons-container .yes{flex-grow:1}.answer-buttons-container .maybe{flex-grow:.5}.answer-buttons-container .no{flex-grow:1}.answer-buttons-container .answer-button{height:60px;flex-grow:1}.answer-buttons-container .rating-info{flex-grow:1;color:#9c9c9c}.spinner-container{text-align:center;-ms-grid-row-align:center;align-self:center}.spinner-container mat-spinner{margin:auto}.labeling-done-card{width:50%;margin-left:auto;margin-right:auto}"]
            }] }
];
/** @nocollapse */
QuestionRoomComponent.ctorParameters = () => [
    { type: QuestionService },
    { type: MatDialog },
    { type: MatSnackBar },
    { type: GamificationService }
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
    QuestionRoomComponent.prototype.isLoading;
    /** @type {?} */
    QuestionRoomComponent.prototype.thanksGif;
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
    QuestionRoomComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    QuestionRoomComponent.prototype.snack;
    /**
     * @type {?}
     * @private
     */
    QuestionRoomComponent.prototype.gf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVqRiw0QkFLQzs7O0lBSkMsMEJBQWlCOztJQUNqQiwwQkFBa0I7O0lBRWxCLHNCQUFhOztBQWdDZixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBa0JoQyxZQUNVLFFBQXlCLEVBQ3pCLE1BQWlCLEVBQ2pCLEtBQWtCLEVBQ2xCLEVBQXVCO1FBSHZCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQXJCakMsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBYSxFQUFFLENB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ZUFBZTtZQWFmLFNBQVM7WUFBRSxXQUFXO1lBWHRCLG1CQUFtQjs7OzBCQXlEekIsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLFNBQVMsU0FBQyxlQUFlOzs7O0lBZjFCLGdEQUFvQjs7SUFDcEIsNENBQTJCOztJQUMzQiw4Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDBDQUFVOztJQUVWLDRDQUE2Qjs7SUFDN0IscUNBQXNCOztJQUN0QixnREFBOEI7O0lBQzlCLHdDQUEyQjs7SUFDM0IsMENBQTZCOztJQUM3Qix3Q0FBMkI7O0lBQzNCLGdEQUFnQzs7SUFDaEMsMkNBQTRCOztJQUU1QiwwQ0FDNEI7Ozs7O0lBRTFCLHlDQUFpQzs7Ozs7SUFDakMsdUNBQXlCOzs7OztJQUN6QixzQ0FBMEI7Ozs7O0lBQzFCLG1DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBRdWVzdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcXVlc3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdGlvbkxpc3QgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcclxuaW1wb3J0IHsgR2FtaWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9nYW1pZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEFuc3dlciwgQmFja2VuZFJlc3BvbnNlIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGEuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICB0cmlnZ2VyLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgc3R5bGUsXHJcbiAgYW5pbWF0ZSxcclxuICBrZXlmcmFtZXMsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IHB1bHNlQW5pbWF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBSZXdhcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9yZXdhcmQtZGlhbG9nL3Jld2FyZC1kaWFsb2cuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV3YXJkIHtcclxuICBwb3NpdGlvbjogbnVtYmVyO1xyXG4gIHVubG9ja2VkOiBib29sZWFuO1xyXG4gIC8vIGxhYmVsOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXF1ZXN0aW9uLXJvb20nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignZmFkZUluJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6aW5jcmVtZW50JywgW1xyXG4gICAgICAgIGFuaW1hdGUoXHJcbiAgICAgICAgICAnNTAwbXMnLFxyXG4gICAgICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMScgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxyXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KVxyXG4gICAgICAgICAgXSlcclxuICAgICAgICApXHJcbiAgICAgIF0pXHJcbiAgICBdKSxcclxuICAgIHRyaWdnZXIoJ3VubG9ja1Jld2FyZCcsIFtcclxuICAgICAgdHJhbnNpdGlvbignZmFsc2UgPT4gdHJ1ZScsIFtcclxuICAgICAgICB1c2VBbmltYXRpb24ocHVsc2VBbmltYXRpb24sIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICB0aW1pbmdzOiAnNDAwbXMgY3ViaWMtYmV6aWVyKC4xMSwuOTksLjgzLC40MyknLFxyXG4gICAgICAgICAgICBzY2FsZTogMS41XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Sb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgY3VycmVudFF1ZXN0aW9uID0gMDtcclxuICB0ZW1wQW5zd2VyczogQW5zd2VyW10gPSBbXTtcclxuICBsb2NrZWRSZXdhcmRzO1xyXG4gIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgdGhhbmtzR2lmO1xyXG5cclxuICBASW5wdXQoKSBtYXhQcm9ncmVzczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRvbmU6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXJyZW50SW5zdGFuY2U6IGFueTtcclxuICBASW5wdXQoKSByZXdhcmRzOiBSZXdhcmRbXTtcclxuICBASW5wdXQoKSBxdWVzdGlvbnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGFuc3dlcnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHNob3dQcm9ncmVzc2JhciA9IHRydWU7XHJcbiAgQElucHV0KCkgYW5zd2VyTW9kZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3Rpb25MaXN0JylcclxuICBzZWxlY3Rpb246IE1hdFNlbGVjdGlvbkxpc3Q7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSBzbmFjazogTWF0U25hY2tCYXIsXHJcbiAgICBwcml2YXRlIGdmOiBHYW1pZmljYXRpb25TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZG9VcGRhdGVSZXdhcmRzKCk7XHJcbiAgICB0aGlzLnRoYW5rc0dpZiA9IHRoaXMuZ2YuZ2V0UmFuZG9tR2lmKCdwYXJ0eScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZG9uZSkge1xyXG4gICAgICB0aGlzLmRvVXBkYXRlUmV3YXJkcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuY3VycmVudEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY3VycmVudEluc3RhbmNlLnRleHQgPSAnJztcclxuICB9XHJcblxyXG4gIGlzRG9uZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmRvbmUgIT0gbnVsbCAmJiB0aGlzLmRvbmUgPj0gdGhpcy5tYXhQcm9ncmVzcztcclxuICB9XHJcblxyXG4gIHNlbmRBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFuc3dlcnNUb0JhY2tlbmQgPSB0aGlzLnRlbXBBbnN3ZXJzLmNvbmNhdCh0aGlzLmNyZWF0ZUFuc3dlcihhbnN3ZXIpKTtcclxuICAgIHRoaXMudGVtcEFuc3dlcnMgPSBbXTtcclxuICAgIHRoaXMucXVlc3Rpb24uaGFuZGxlU3VibWl0dGVkQW5zd2VycyhhbnN3ZXJzVG9CYWNrZW5kKTtcclxuICB9XHJcblxyXG4gIGNsYWltUmV3YXJkKHJld2FyZCkge1xyXG4gICAgaWYgKHJld2FyZC51bmxvY2tlZCkge1xyXG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKFJld2FyZERpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgIGRhdGE6IHsgdG90YWw6IHJld2FyZC50b3RhbCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIGtleWJvYXJkIGludGVyYWN0aW9uXHJcbiAgICogT25seSB3b3JraW5nIGhhcmRjb2RlZCBmb3IgYmluYXJ5IGF0bVxyXG4gICAqL1xyXG4gIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hbnN3ZXJNb2RlICE9PSAnYmluYXJ5Jykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgIHRoaXMuc3VibWl0QW5zd2VyKCd5ZXMnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ25vJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMuc3VibWl0QW5zd2VyKCdtYXliZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpOiBBbnN3ZXIge1xyXG4gICAgbGV0IG5ld0Fuc3dlcjogQW5zd2VyO1xyXG4gICAgbmV3QW5zd2VyID0ge1xyXG4gICAgICBkb2N1bWVudElkOiB0aGlzLmN1cnJlbnRJbnN0YW5jZS5pZCxcclxuICAgICAgcXVlc3Rpb25JZDogdGhpcy5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25dLFxyXG4gICAgICBhbnN3ZXI6IGFuc3dlclxyXG4gICAgfTtcclxuICAgIHJldHVybiBuZXdBbnN3ZXI7XHJcbiAgfVxyXG5cclxuICAvLyBUcmFja2luZyB0aGUgdGVtcCByZXdhcmRzIGlzIG5lY2Vzc2FyeSB0byByZWFjdCB0byB1bmxvY2tlZCByZXdhcmRzXHJcbiAgLy8gVGhpcyBtaWdodCBuZWVkIGFuIG92ZXJoYXVsIHNpbmNlIGl0J3MgdG9vIGNvbXBsaWNhdGVkXHJcbiAgcHJpdmF0ZSB1cGRhdGVSZXdhcmRzKCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gdGhpcy5yZXdhcmRzLmZpbHRlcihyZXdhcmQgPT4gcmV3YXJkLnVubG9ja2VkID09PSBmYWxzZSk7XHJcbiAgICBjb25zdCB0bXBMb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB0aGlzLmRvVXBkYXRlUmV3YXJkcygpO1xyXG4gICAgdGhpcy5sb2NrZWRSZXdhcmRzID0gdGhpcy5yZXdhcmRzLmZpbHRlcihcclxuICAgICAgcmV3YXJkID0+IHJld2FyZC51bmxvY2tlZCA9PT0gZmFsc2VcclxuICAgICk7XHJcbiAgICBpZiAodGhpcy5sb2NrZWRSZXdhcmRzLmxlbmd0aCA8IHRtcExvY2tlZC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jbGFpbVJld2FyZCh0bXBMb2NrZWRbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1VwZGF0ZVJld2FyZHMoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSB0aGlzLnJld2FyZHMuZmlsdGVyKHJld2FyZCA9PiByZXdhcmQudW5sb2NrZWQgPT09IGZhbHNlKTtcclxuICAgIC8vIFVwZGF0ZSB1bmxvY2sgc3RhdHVzIGZsYWcgb24gYWxsIHJld2FyZHNcclxuICAgIGxvY2tlZC5mb3JFYWNoKHJld2FyZCA9PiB7XHJcbiAgICAgIGlmICgodGhpcy5kb25lIC8gdGhpcy5tYXhQcm9ncmVzcykgKiAxMDAgPj0gcmV3YXJkLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV3YXJkLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXdhcmQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdEFuc3dlcihhbnN3ZXI6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uICsgMSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnRlbXBBbnN3ZXJzID0gWy4uLnRoaXMudGVtcEFuc3dlcnMsIHRoaXMuY3JlYXRlQW5zd2VyKGFuc3dlcildO1xyXG4gICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbisrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAvLyBPbmUgSXRlcmF0aW9uIG9mIFF1ZXN0aW9uLVBhY2thZ2UgZG9uZVxyXG4gICAgICB0aGlzLnNlbmRBbnN3ZXIoYW5zd2VyKTtcclxuICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmRvbmUrKztcclxuICAgICAgdGhpcy51cGRhdGVSZXdhcmRzKCk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLm1vY2tBY2hpZXZlbWVudENoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBtb2NrQWNoaWV2ZW1lbnRDaGVjaygpIHtcclxuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wNSkge1xyXG4gICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICsgNzU7XHJcbiAgICAgIHRoaXMuc25hY2sub3BlbihwZXJjZW50ICsgJyUgZGVpbmVyIEtvbGxlZ2VuIHfDpGhsdGVuIGRhc3NlbGJlIPCfmIEnLCAnT0snLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5pc2goKSB7XHJcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9nb28uZ2wvZm9ybXMvQnphZ2RJc1VPeTZoQTJ3QjInLCAnX2JsYW5rJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==