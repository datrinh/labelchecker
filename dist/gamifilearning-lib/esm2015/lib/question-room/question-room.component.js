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
        this.isLoading = false;
        this.showProgressbar = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.doUpdateRewards();
        this.thanksGif = this.gf.getRandomGif('party');
        console.log(this.done, this.maxProgress);
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
        this.doUpdateRewards();
        this.lockedRewards = this.rewards.filter(reward => reward.unlocked === false);
        if (this.lockedRewards.length < tmpLocked.length) {
            this.claimReward(tmpLocked[0]);
        }
        console.log(this.lockedRewards, tmpLocked);
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
                console.log(reward);
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
                template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\" *ngIf=\"!isDone(); else lablingDone\">\r\n    <!-- <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\"> -->\r\n    <p *ngIf=\"!isLoading; else loading\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #loading>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <ng-template #lablingDone>\r\n    <mat-card class=\"labeling-done-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Du hast es geschafft!</mat-card-title>\r\n      </mat-card-header>\r\n      <img\r\n        mat-card-image\r\n        src=\"{{ (thanksGif | async)?.images.original.url }}\"\r\n      />\r\n      <mat-card-content>\r\n        <p>\r\n          But wait! Um Deine Arbeit abzuschlie\u00DFen, nimm dir bitte noch 1-2\r\n          Minuten f\u00FCr diesen Fragebogen.\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"finish()\"\r\n          style=\"width: 100%\"\r\n          color=\"primary\"\r\n        >\r\n          Arbeit abschlie\u00DFen\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </ng-template>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ ((currentQuestion + 1) / questions.length) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div class=\"question-card-wrapper\">\r\n      <mat-card-header class=\"question-text\">\r\n        <mat-card-title>\r\n          <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-card-actions\r\n          *ngIf=\"answerMode === 'binary'\"\r\n          class=\"answer-buttons-container\"\r\n        >\r\n          <button\r\n            mat-button\r\n            *ngFor=\"let answer of answers\"\r\n            class=\"answer-button\"\r\n            [ngClass]=\"answer\"\r\n            (click)=\"submitAnswer(answer)\"\r\n          >\r\n            {{ answer | translate }}\r\n          </button>\r\n        </mat-card-actions>\r\n        <mat-card-actions\r\n          *ngIf=\"answerMode === 'stars'\"\r\n          class=\"answer-buttons-container\"\r\n        >\r\n          <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n          <button\r\n            mat-button\r\n            *ngFor=\"let answer of answers\"\r\n            class=\"answer-button\"\r\n            [ngClass]=\"answer\"\r\n            (click)=\"submitAnswer(answer)\"\r\n          >\r\n            {{ answer | translate }}\r\n          </button>\r\n          <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n        </mat-card-actions>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</section>\r\n",
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
                styles: [".content{display:-ms-grid;display:grid;-ms-grid-rows:100px 400px 30px 1fr 30px 60px;grid-template-rows:100px 400px 30px 1fr 30px 60px;-ms-grid-columns:1fr;grid-template-columns:1fr}.content:focus{outline:solid 0}.question-text{justify-content:center}.question-text mat-card-title{font-weight:400}.question-card-wrapper{padding:16px 16px 0}.progressbar-container{-ms-grid-row:1;-ms-grid-row-span:1;grid-row:1/2;-ms-grid-row-align:center;align-self:center;position:relative;text-align:center}.progressbar-container mat-progress-bar{margin-bottom:8px}.progressbar-container .reward-icon{display:block;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;color:#9c9c9c}.progressbar-container .unlocked{color:#3f51b5}.progress-label{font-weight:700;line-height:2}.text-card{display:flex;justify-content:center;-ms-grid-row:2;-ms-grid-row-span:1;grid-row:2/3;overflow:auto}.question-area{-ms-grid-row:4;-ms-grid-row-span:3;grid-row:4/7}.question-card{-ms-grid-row:4;-ms-grid-row-span:1;grid-row:4/5;padding:0}.button-list,.submit-button{-ms-grid-row:6;-ms-grid-row-span:1;grid-row:6/7;-ms-grid-row-align:stretch;align-self:stretch;-ms-grid-column-align:stretch;justify-self:stretch}.mat-card-header-text{text-align:center}.answer-buttons-container{display:flex}.answer-buttons-container .yes{flex-grow:1}.answer-buttons-container .maybe{flex-grow:.5}.answer-buttons-container .no{flex-grow:1}.answer-buttons-container .answer-button{height:60px;flex-grow:1}.answer-buttons-container .rating-info{flex-grow:1;color:#9c9c9c}.spinner-container{text-align:center;-ms-grid-row-align:center;align-self:center}.spinner-container mat-spinner{margin:auto}.labeling-done-card{width:50%;margin-left:auto;margin-right:auto}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVqRiw0QkFLQzs7O0lBSkMsMEJBQWlCOztJQUNqQiwwQkFBa0I7O0lBRWxCLHNCQUFhOztBQWdDZixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBa0JoQyxZQUNVLFFBQXlCLEVBQ3pCLE1BQWlCLEVBQ2pCLEtBQWtCLEVBQ2xCLEVBQXVCO1FBSHZCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQXJCakMsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBYSxFQUFFLENB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LEtBQUssRUFBRSxHQUFHO2lDQUNYOzZCQUNGLENBQUM7eUJBQ0gsQ0FBQztxQkFDSCxDQUFDO2lCQUNIOzthQUNGOzs7O1lBbkRRLGVBQWU7WUFhZixTQUFTO1lBQUUsV0FBVztZQVh0QixtQkFBbUI7OzswQkF5RHpCLEtBQUs7bUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFFTCxTQUFTLFNBQUMsZUFBZTs7OztJQWYxQixnREFBb0I7O0lBQ3BCLDRDQUEyQjs7SUFDM0IsOENBQWM7O0lBQ2QsMENBQWtCOztJQUNsQiwwQ0FBVTs7SUFFViw0Q0FBNkI7O0lBQzdCLHFDQUFzQjs7SUFDdEIsZ0RBQThCOztJQUM5Qix3Q0FBMkI7O0lBQzNCLDBDQUE2Qjs7SUFDN0Isd0NBQTJCOztJQUMzQixnREFBZ0M7O0lBQ2hDLDJDQUE0Qjs7SUFFNUIsMENBQzRCOzs7OztJQUUxQix5Q0FBaUM7Ozs7O0lBQ2pDLHVDQUF5Qjs7Ozs7SUFDekIsc0NBQTBCOzs7OztJQUMxQixtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9xdWVzdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0aW9uTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW5zd2VyLCBCYWNrZW5kUmVzcG9uc2UgfSBmcm9tICcuLi9zaGFyZWQvZGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgdHJhbnNpdGlvbixcclxuICBzdHlsZSxcclxuICBhbmltYXRlLFxyXG4gIGtleWZyYW1lcyxcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgcHVsc2VBbmltYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFJld2FyZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Jld2FyZC1kaWFsb2cvcmV3YXJkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmQge1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgdW5sb2NrZWQ6IGJvb2xlYW47XHJcbiAgLy8gbGFiZWw6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtcXVlc3Rpb24tcm9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzppbmNyZW1lbnQnLCBbXHJcbiAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICc1MDBtcycsXHJcbiAgICAgICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSxcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIClcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcigndW5sb2NrUmV3YXJkJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCdmYWxzZSA9PiB0cnVlJywgW1xyXG4gICAgICAgIHVzZUFuaW1hdGlvbihwdWxzZUFuaW1hdGlvbiwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHRpbWluZ3M6ICc0MDBtcyBjdWJpYy1iZXppZXIoLjExLC45OSwuODMsLjQzKScsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgY3VycmVudFF1ZXN0aW9uID0gMDtcclxuICB0ZW1wQW5zd2VyczogQW5zd2VyW10gPSBbXTtcclxuICBsb2NrZWRSZXdhcmRzO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHRoYW5rc0dpZjtcclxuXHJcbiAgQElucHV0KCkgbWF4UHJvZ3Jlc3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBkb25lOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVudEluc3RhbmNlOiBhbnk7XHJcbiAgQElucHV0KCkgcmV3YXJkczogUmV3YXJkW107XHJcbiAgQElucHV0KCkgcXVlc3Rpb25zOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBhbnN3ZXJzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBzaG93UHJvZ3Jlc3NiYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGFuc3dlck1vZGU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2VsZWN0aW9uTGlzdCcpXHJcbiAgc2VsZWN0aW9uOiBNYXRTZWxlY3Rpb25MaXN0O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHByaXZhdGUgc25hY2s6IE1hdFNuYWNrQmFyLFxyXG4gICAgcHJpdmF0ZSBnZjogR2FtaWZpY2F0aW9uU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRvVXBkYXRlUmV3YXJkcygpO1xyXG4gICAgdGhpcy50aGFua3NHaWYgPSB0aGlzLmdmLmdldFJhbmRvbUdpZigncGFydHknKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9uZSwgdGhpcy5tYXhQcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kb25lKSB7XHJcbiAgICAgIHRoaXMuZG9VcGRhdGVSZXdhcmRzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5jdXJyZW50SW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRG9uZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuZG9uZSA8IHRoaXMubWF4UHJvZ3Jlc3MpO1xyXG4gIH1cclxuXHJcbiAgc2VuZEFuc3dlcihhbnN3ZXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgYW5zd2Vyc1RvQmFja2VuZCA9IHRoaXMudGVtcEFuc3dlcnMuY29uY2F0KHRoaXMuY3JlYXRlQW5zd2VyKGFuc3dlcikpO1xyXG4gICAgdGhpcy50ZW1wQW5zd2VycyA9IFtdO1xyXG4gICAgdGhpcy5xdWVzdGlvbi5oYW5kbGVTdWJtaXR0ZWRBbnN3ZXJzKGFuc3dlcnNUb0JhY2tlbmQpO1xyXG4gIH1cclxuXHJcbiAgY2xhaW1SZXdhcmQocmV3YXJkKSB7XHJcbiAgICBpZiAocmV3YXJkLnVubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oUmV3YXJkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGF0YTogeyB0b3RhbDogcmV3YXJkLnRvdGFsIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cclxuICAgKiBPbmx5IHdvcmtpbmcgaGFyZGNvZGVkIGZvciBiaW5hcnkgYXRtXHJcbiAgICovXHJcbiAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFuc3dlck1vZGUgIT09ICdiaW5hcnknKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ3llcycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICB0aGlzLnN1Ym1pdEFuc3dlcignbm8nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ21heWJlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUFuc3dlcihhbnN3ZXI6IHN0cmluZyk6IEFuc3dlciB7XHJcbiAgICBsZXQgbmV3QW5zd2VyOiBBbnN3ZXI7XHJcbiAgICBuZXdBbnN3ZXIgPSB7XHJcbiAgICAgIGRvY3VtZW50SWQ6IHRoaXMuY3VycmVudEluc3RhbmNlLmlkLFxyXG4gICAgICBxdWVzdGlvbklkOiB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0sXHJcbiAgICAgIGFuc3dlcjogYW5zd2VyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld0Fuc3dlcjtcclxuICB9XHJcblxyXG4gIC8vIFRyYWNraW5nIHRoZSB0ZW1wIHJld2FyZHMgaXMgbmVjZXNzYXJ5IHRvIHJlYWN0IHRvIHVubG9ja2VkIHJld2FyZHNcclxuICAvLyBUaGlzIG1pZ2h0IG5lZWQgYW4gb3ZlcmhhdWwgc2luY2UgaXQncyB0b28gY29tcGxpY2F0ZWRcclxuICBwcml2YXRlIHVwZGF0ZVJld2FyZHMoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSB0aGlzLnJld2FyZHMuZmlsdGVyKHJld2FyZCA9PiByZXdhcmQudW5sb2NrZWQgPT09IGZhbHNlKTtcclxuICAgIGNvbnN0IHRtcExvY2tlZCA9IGxvY2tlZDtcclxuICAgIHRoaXMuZG9VcGRhdGVSZXdhcmRzKCk7XHJcbiAgICB0aGlzLmxvY2tlZFJld2FyZHMgPSB0aGlzLnJld2FyZHMuZmlsdGVyKFxyXG4gICAgICByZXdhcmQgPT4gcmV3YXJkLnVubG9ja2VkID09PSBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLmxvY2tlZFJld2FyZHMubGVuZ3RoIDwgdG1wTG9ja2VkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmNsYWltUmV3YXJkKHRtcExvY2tlZFswXSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2tlZFJld2FyZHMsIHRtcExvY2tlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvVXBkYXRlUmV3YXJkcygpIHtcclxuICAgIGNvbnN0IGxvY2tlZCA9IHRoaXMucmV3YXJkcy5maWx0ZXIocmV3YXJkID0+IHJld2FyZC51bmxvY2tlZCA9PT0gZmFsc2UpO1xyXG4gICAgLy8gVXBkYXRlIHVubG9jayBzdGF0dXMgZmxhZyBvbiBhbGwgcmV3YXJkc1xyXG4gICAgbG9ja2VkLmZvckVhY2gocmV3YXJkID0+IHtcclxuICAgICAgaWYgKCh0aGlzLmRvbmUgLyB0aGlzLm1heFByb2dyZXNzKSAqIDEwMCA+PSByZXdhcmQucG9zaXRpb24pIHtcclxuICAgICAgICByZXdhcmQudW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJld2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0QW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gKyAxIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudGVtcEFuc3dlcnMgPSBbLi4udGhpcy50ZW1wQW5zd2VycywgdGhpcy5jcmVhdGVBbnN3ZXIoYW5zd2VyKV07XHJcbiAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIC8vIE9uZSBJdGVyYXRpb24gb2YgUXVlc3Rpb24tUGFja2FnZSBkb25lXHJcbiAgICAgIHRoaXMuc2VuZEFuc3dlcihhbnN3ZXIpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuZG9uZSsrO1xyXG4gICAgICB0aGlzLnVwZGF0ZVJld2FyZHMoKTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMubW9ja0FjaGlldmVtZW50Q2hlY2soKTtcclxuICB9XHJcblxyXG4gIG1vY2tBY2hpZXZlbWVudENoZWNrKCkge1xyXG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjA1KSB7XHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKyA3NTtcclxuICAgICAgdGhpcy5zbmFjay5vcGVuKHBlcmNlbnQgKyAnJSBkZWluZXIgS29sbGVnZW4gd8OkaGx0ZW4gZGFzc2VsYmUg8J+YgScsICdPSycsIHtcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmlzaCgpIHtcclxuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dvby5nbC9mb3Jtcy9CemFnZElzVU95NmhBMndCMicsICdfYmxhbmsnKTtcclxuICB9XHJcbn1cclxuIl19