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
        this.doUpdateRewards();
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
                template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <!-- <i\r\n        *ngIf=\"reward.unlocked;else locked\"\r\n        class=\"fas fa-gift unlocked\"\r\n        matTooltip=\"\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      ></i> -->\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n      <!-- <img\r\n        src=\"assets/gift.png\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        (click)=\"claimReward(reward.unlocked)\"\r\n        matTooltip=\"Noch nicht freigeschalten!\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      /> -->\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\">\r\n    <!-- <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\"> -->\r\n    <p *ngIf=\"!isDone(); else labelingDone\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #labelingDone>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n        <p>Verarbeite Daten...</p>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-card-header class=\"question-text\">\r\n      <mat-card-title>\r\n        <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'binary'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer | translate }}\r\n        </button>\r\n      </mat-card-actions>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'stars'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer }}\r\n        </button>\r\n        <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n      </mat-card-actions>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n",
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
                styles: [".content{display:-ms-grid;display:grid;-ms-grid-rows:100px 400px 30px 1fr 30px 60px;grid-template-rows:100px 400px 30px 1fr 30px 60px;-ms-grid-columns:1fr;grid-template-columns:1fr}.content:focus{outline:solid 0}.question-text{justify-content:center}.question-text mat-card-title{font-weight:400}.progressbar-container{-ms-grid-row:1;-ms-grid-row-span:1;grid-row:1/2;-ms-grid-row-align:center;align-self:center;position:relative;text-align:center}.progressbar-container mat-progress-bar{margin-bottom:8px}.progressbar-container .reward-icon{display:block;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;color:#9c9c9c}.progressbar-container .unlocked{color:#3f51b5}.progress-label{font-weight:700;line-height:2}.text-card{display:flex;justify-content:center;-ms-grid-row:2;-ms-grid-row-span:1;grid-row:2/3;overflow:auto}.question-area{-ms-grid-row:4;-ms-grid-row-span:3;grid-row:4/7}.question-card{-ms-grid-row:4;-ms-grid-row-span:1;grid-row:4/5}.button-list,.submit-button{-ms-grid-row:6;-ms-grid-row-span:1;grid-row:6/7;-ms-grid-row-align:stretch;align-self:stretch;-ms-grid-column-align:stretch;justify-self:stretch}.mat-card-header-text{text-align:center}.answer-buttons-container{display:flex}.answer-buttons-container .yes{flex-grow:1}.answer-buttons-container .maybe{flex-grow:.5}.answer-buttons-container .no{flex-grow:1}.answer-buttons-container .answer-button{height:60px;flex-grow:1}.answer-buttons-container .rating-info{flex-grow:1;color:#9c9c9c}.spinner-container{text-align:center;-ms-grid-row-align:center;align-self:center}.spinner-container mat-spinner{margin:auto}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVqRiw0QkFLQzs7O0lBSkMsMEJBQWlCOztJQUNqQiwwQkFBa0I7O0lBRWxCLHNCQUFhOztBQWdDZixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBZ0JoQyxZQUNVLFFBQXlCLEVBQ3pCLFlBQWlDLEVBQ2pDLE1BQWlCLEVBQ2pCLEtBQWtCO1FBSGxCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFuQjVCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxD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QUMzQiw4Q0FBYzs7SUFFZCw0Q0FBNkI7O0lBQzdCLHFDQUFzQjs7SUFDdEIsZ0RBQThCOztJQUM5Qix3Q0FBMkI7O0lBQzNCLDBDQUE2Qjs7SUFDN0Isd0NBQTJCOztJQUMzQixnREFBZ0M7O0lBQ2hDLDJDQUE0Qjs7SUFFNUIsMENBQzRCOzs7OztJQUUxQix5Q0FBaUM7Ozs7O0lBQ2pDLDZDQUF5Qzs7Ozs7SUFDekMsdUNBQXlCOzs7OztJQUN6QixzQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9xdWVzdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0aW9uTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW5zd2VyLCBCYWNrZW5kUmVzcG9uc2UgfSBmcm9tICcuLi9zaGFyZWQvZGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgdHJhbnNpdGlvbixcclxuICBzdHlsZSxcclxuICBhbmltYXRlLFxyXG4gIGtleWZyYW1lcyxcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgcHVsc2VBbmltYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFJld2FyZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Jld2FyZC1kaWFsb2cvcmV3YXJkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmQge1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgdW5sb2NrZWQ6IGJvb2xlYW47XHJcbiAgLy8gbGFiZWw6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtcXVlc3Rpb24tcm9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzppbmNyZW1lbnQnLCBbXHJcbiAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICc1MDBtcycsXHJcbiAgICAgICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSxcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIClcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcigndW5sb2NrUmV3YXJkJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCdmYWxzZSA9PiB0cnVlJywgW1xyXG4gICAgICAgIHVzZUFuaW1hdGlvbihwdWxzZUFuaW1hdGlvbiwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHRpbWluZ3M6ICc0MDBtcyBjdWJpYy1iZXppZXIoLjExLC45OSwuODMsLjQzKScsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgY3VycmVudFF1ZXN0aW9uID0gMDtcclxuICB0ZW1wQW5zd2VyczogQW5zd2VyW10gPSBbXTtcclxuICBsb2NrZWRSZXdhcmRzO1xyXG5cclxuICBASW5wdXQoKSBtYXhQcm9ncmVzczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRvbmU6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXJyZW50SW5zdGFuY2U6IGFueTtcclxuICBASW5wdXQoKSByZXdhcmRzOiBSZXdhcmRbXTtcclxuICBASW5wdXQoKSBxdWVzdGlvbnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGFuc3dlcnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHNob3dQcm9ncmVzc2JhciA9IHRydWU7XHJcbiAgQElucHV0KCkgYW5zd2VyTW9kZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3Rpb25MaXN0JylcclxuICBzZWxlY3Rpb246IE1hdFNlbGVjdGlvbkxpc3Q7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGdhbWlmaWNhdGlvbjogR2FtaWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIHNuYWNrOiBNYXRTbmFja0JhclxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRvVXBkYXRlUmV3YXJkcygpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kb25lLCB0aGlzLm1heFByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRvbmUpIHtcclxuICAgICAgdGhpcy5kb1VwZGF0ZVJld2FyZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRG9uZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuZG9uZSA8IHRoaXMubWF4UHJvZ3Jlc3MpO1xyXG4gIH1cclxuXHJcbiAgc2VuZEFuc3dlcihhbnN3ZXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgYW5zd2Vyc1RvQmFja2VuZCA9IHRoaXMudGVtcEFuc3dlcnMuY29uY2F0KHRoaXMuY3JlYXRlQW5zd2VyKGFuc3dlcikpO1xyXG4gICAgdGhpcy50ZW1wQW5zd2VycyA9IFtdO1xyXG4gICAgdGhpcy5xdWVzdGlvbi5oYW5kbGVTdWJtaXR0ZWRBbnN3ZXJzKGFuc3dlcnNUb0JhY2tlbmQpO1xyXG4gIH1cclxuXHJcbiAgY2xhaW1SZXdhcmQocmV3YXJkKSB7XHJcbiAgICBpZiAocmV3YXJkLnVubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oUmV3YXJkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGF0YTogeyB0b3RhbDogcmV3YXJkLnRvdGFsIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cclxuICAgKiBPbmx5IHdvcmtpbmcgaGFyZGNvZGVkIGZvciBiaW5hcnkgYXRtXHJcbiAgICovXHJcbiAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFuc3dlck1vZGUgIT09ICdiaW5hcnknKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ3llcycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICB0aGlzLnN1Ym1pdEFuc3dlcignbm8nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ21heWJlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUFuc3dlcihhbnN3ZXI6IHN0cmluZyk6IEFuc3dlciB7XHJcbiAgICBsZXQgbmV3QW5zd2VyOiBBbnN3ZXI7XHJcbiAgICBuZXdBbnN3ZXIgPSB7XHJcbiAgICAgIGRvY3VtZW50SWQ6IHRoaXMuY3VycmVudEluc3RhbmNlLmlkLFxyXG4gICAgICBxdWVzdGlvbklkOiB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0sXHJcbiAgICAgIGFuc3dlcjogYW5zd2VyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld0Fuc3dlcjtcclxuICB9XHJcblxyXG4gIC8vIFRyYWNraW5nIHRoZSB0ZW1wIHJld2FyZHMgaXMgbmVjZXNzYXJ5IHRvIHJlYWN0IHRvIHVubG9ja2VkIHJld2FyZHNcclxuICAvLyBUaGlzIG1pZ2h0IG5lZWQgYW4gb3ZlcmhhdWwgc2luY2UgaXQncyB0b28gY29tcGxpY2F0ZWRcclxuICBwcml2YXRlIHVwZGF0ZVJld2FyZHMoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSB0aGlzLnJld2FyZHMuZmlsdGVyKHJld2FyZCA9PiByZXdhcmQudW5sb2NrZWQgPT09IGZhbHNlKTtcclxuICAgIGNvbnN0IHRtcExvY2tlZCA9IGxvY2tlZDtcclxuICAgIHRoaXMuZG9VcGRhdGVSZXdhcmRzKCk7XHJcbiAgICB0aGlzLmxvY2tlZFJld2FyZHMgPSB0aGlzLnJld2FyZHMuZmlsdGVyKFxyXG4gICAgICByZXdhcmQgPT4gcmV3YXJkLnVubG9ja2VkID09PSBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLmxvY2tlZFJld2FyZHMubGVuZ3RoIDwgdG1wTG9ja2VkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmNsYWltUmV3YXJkKHRtcExvY2tlZFswXSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2tlZFJld2FyZHMsIHRtcExvY2tlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvVXBkYXRlUmV3YXJkcygpIHtcclxuICAgIGNvbnN0IGxvY2tlZCA9IHRoaXMucmV3YXJkcy5maWx0ZXIocmV3YXJkID0+IHJld2FyZC51bmxvY2tlZCA9PT0gZmFsc2UpO1xyXG4gICAgLy8gVXBkYXRlIHVubG9jayBzdGF0dXMgZmxhZyBvbiBhbGwgcmV3YXJkc1xyXG4gICAgbG9ja2VkLmZvckVhY2gocmV3YXJkID0+IHtcclxuICAgICAgaWYgKCh0aGlzLmRvbmUgLyB0aGlzLm1heFByb2dyZXNzKSAqIDEwMCA+PSByZXdhcmQucG9zaXRpb24pIHtcclxuICAgICAgICByZXdhcmQudW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJld2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0QW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gKyAxIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudGVtcEFuc3dlcnMgPSBbLi4udGhpcy50ZW1wQW5zd2VycywgdGhpcy5jcmVhdGVBbnN3ZXIoYW5zd2VyKV07XHJcbiAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPbmUgSXRlcmF0aW9uIG9mIFF1ZXN0aW9uLVBhY2thZ2UgZG9uZVxyXG4gICAgICB0aGlzLnNlbmRBbnN3ZXIoYW5zd2VyKTtcclxuICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmRvbmUrKztcclxuICAgICAgdGhpcy51cGRhdGVSZXdhcmRzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vY2tBY2hpZXZlbWVudENoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBtb2NrQWNoaWV2ZW1lbnRDaGVjaygpIHtcclxuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wNSkge1xyXG4gICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICsgNzU7XHJcbiAgICAgIHRoaXMuc25hY2sub3BlbihwZXJjZW50ICsgJyUgZGVpbmVyIEtvbGxlZ2VuIHfDpGhsdGVuIGRhc3NlbGJlIPCfmIEnLCAnT0snLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==