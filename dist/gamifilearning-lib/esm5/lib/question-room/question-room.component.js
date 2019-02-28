/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var QuestionRoomComponent = /** @class */ (function () {
    function QuestionRoomComponent(question, dialog, snack, gf) {
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
    QuestionRoomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.doUpdateRewards();
        this.thanksGif = this.gf.getRandomGif('party');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    QuestionRoomComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.done) {
            this.doUpdateRewards();
        }
        if (changes.currentInstance) {
            this.isLoading = false;
        }
    };
    /**
     * @return {?}
     */
    QuestionRoomComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.currentInstance.text = '';
    };
    /**
     * @return {?}
     */
    QuestionRoomComponent.prototype.isDone = /**
     * @return {?}
     */
    function () {
        return this.done != null && this.done >= this.maxProgress;
    };
    /**
     * @param {?} answer
     * @return {?}
     */
    QuestionRoomComponent.prototype.sendAnswer = /**
     * @param {?} answer
     * @return {?}
     */
    function (answer) {
        /** @type {?} */
        var answersToBackend = this.tempAnswers.concat(this.createAnswer(answer));
        this.tempAnswers = [];
        this.question.handleSubmittedAnswers(answersToBackend);
    };
    /**
     * @param {?} reward
     * @return {?}
     */
    QuestionRoomComponent.prototype.claimReward = /**
     * @param {?} reward
     * @return {?}
     */
    function (reward) {
        if (reward.unlocked) {
            this.dialog.open(RewardDialogComponent, {
                data: { total: reward.total }
            });
        }
    };
    /**
     * Handle keyboard interaction
     * Only working hardcoded for binary atm
     */
    /**
     * Handle keyboard interaction
     * Only working hardcoded for binary atm
     * @param {?} event
     * @return {?}
     */
    QuestionRoomComponent.prototype.onKey = /**
     * Handle keyboard interaction
     * Only working hardcoded for binary atm
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @private
     * @param {?} answer
     * @return {?}
     */
    QuestionRoomComponent.prototype.createAnswer = /**
     * @private
     * @param {?} answer
     * @return {?}
     */
    function (answer) {
        /** @type {?} */
        var newAnswer;
        newAnswer = {
            documentId: this.currentInstance.id,
            questionId: this.questions[this.currentQuestion],
            answer: answer
        };
        return newAnswer;
    };
    // Tracking the temp rewards is necessary to react to unlocked rewards
    // This might need an overhaul since it's too complicated
    // Tracking the temp rewards is necessary to react to unlocked rewards
    // This might need an overhaul since it's too complicated
    /**
     * @private
     * @return {?}
     */
    QuestionRoomComponent.prototype.updateRewards = 
    // Tracking the temp rewards is necessary to react to unlocked rewards
    // This might need an overhaul since it's too complicated
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var locked = this.rewards.filter(function (reward) { return reward.unlocked === false; });
        /** @type {?} */
        var tmpLocked = locked;
        this.doUpdateRewards();
        this.lockedRewards = this.rewards.filter(function (reward) { return reward.unlocked === false; });
        if (this.lockedRewards.length < tmpLocked.length) {
            this.claimReward(tmpLocked[0]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    QuestionRoomComponent.prototype.doUpdateRewards = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var locked = this.rewards.filter(function (reward) { return reward.unlocked === false; });
        // Update unlock status flag on all rewards
        locked.forEach(function (reward) {
            if ((_this.done / _this.maxProgress) * 100 >= reward.position) {
                reward.unlocked = true;
                // console.log(reward);
            }
        });
    };
    /**
     * @param {?} answer
     * @return {?}
     */
    QuestionRoomComponent.prototype.submitAnswer = /**
     * @param {?} answer
     * @return {?}
     */
    function (answer) {
        if (this.currentQuestion + 1 < this.questions.length) {
            this.tempAnswers = tslib_1.__spread(this.tempAnswers, [this.createAnswer(answer)]);
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
    };
    /**
     * @return {?}
     */
    QuestionRoomComponent.prototype.mockAchievementCheck = /**
     * @return {?}
     */
    function () {
        if (Math.random() < 0.05) {
            /** @type {?} */
            var percent = Math.floor(Math.random() * 25) + 75;
            this.snack.open(percent + '% deiner Kollegen wählten dasselbe 😁', 'OK', {
                duration: 2000
            });
        }
    };
    /**
     * @return {?}
     */
    QuestionRoomComponent.prototype.finish = /**
     * @return {?}
     */
    function () {
        window.open('https://goo.gl/forms/BzagdIsUOy6hA2wB2', '_blank');
    };
    QuestionRoomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-question-room',
                    template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\" *ngIf=\"!isDone(); else lablingDone\">\r\n    <!-- <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\"> -->\r\n    <p *ngIf=\"!isLoading; else loading\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #loading>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <ng-template #lablingDone>\r\n    <mat-card class=\"labeling-done-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Du hast es geschafft!</mat-card-title>\r\n      </mat-card-header>\r\n      <img\r\n        mat-card-image\r\n        src=\"{{ (thanksGif | async)?.images.original.url }}\"\r\n      />\r\n      <mat-card-content>\r\n        <p>\r\n          But wait! Um Deine Arbeit abzuschlie\u00DFen, nimm dir bitte noch 1-2\r\n          Minuten f\u00FCr diesen Fragebogen.\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"finish()\"\r\n          style=\"width: 100%\"\r\n          color=\"primary\"\r\n        >\r\n          Arbeit abschlie\u00DFen\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </ng-template>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ ((currentQuestion + 1) / questions.length) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div class=\"question-card-wrapper\">\r\n      <mat-card-header class=\"question-text\">\r\n        <mat-card-title>\r\n          <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-card-actions\r\n          *ngIf=\"answerMode === 'binary'\"\r\n          class=\"answer-buttons-container\"\r\n        >\r\n          <button\r\n            mat-button\r\n            *ngFor=\"let answer of answers\"\r\n            class=\"answer-button\"\r\n            [ngClass]=\"answer\"\r\n            (click)=\"submitAnswer(answer)\"\r\n          >\r\n            {{ answer | translate }}\r\n          </button>\r\n        </mat-card-actions>\r\n        <mat-card-actions\r\n          *ngIf=\"answerMode === 'stars'\"\r\n          class=\"answer-buttons-container\"\r\n        >\r\n          <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n          <button\r\n            mat-button\r\n            *ngFor=\"let answer of answers\"\r\n            class=\"answer-button\"\r\n            [ngClass]=\"answer\"\r\n            (click)=\"submitAnswer(answer)\"\r\n            [disabled]=\"isLoading\"\r\n          >\r\n            {{ answer | translate }}\r\n          </button>\r\n          <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n        </mat-card-actions>\r\n      </mat-card-content>\r\n    </div>\r\n  </mat-card>\r\n</section>\r\n",
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
    QuestionRoomComponent.ctorParameters = function () { return [
        { type: QuestionService },
        { type: MatDialog },
        { type: MatSnackBar },
        { type: GamificationService }
    ]; };
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
    return QuestionRoomComponent;
}());
export { QuestionRoomComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFFakYsNEJBS0M7OztJQUpDLDBCQUFpQjs7SUFDakIsMEJBQWtCOztJQUVsQixzQkFBYTs7QUFHZjtJQStDRSwrQkFDVSxRQUF5QixFQUN6QixNQUFpQixFQUNqQixLQUFrQixFQUNsQixFQUF1QjtRQUh2QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsT0FBRSxHQUFGLEVBQUUsQ0FBcUI7UUFyQmpDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBRyxJQUFJ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VUFBVSxDQUFDLGVBQWUsRUFBRTtnQ0FDMUIsWUFBWSxDQUFDLGNBQWMsRUFBRTtvQ0FDM0IsTUFBTSxFQUFFO3dDQUNOLE9BQU8sRUFBRSxxQ0FBcUM7d0NBQzlDLEtBQUssRUFBRSxHQUFHO3FDQUNYO2lDQUNGLENBQUM7NkJBQ0gsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkFuRFEsZUFBZTtnQkFhZixTQUFTO2dCQUFFLFdBQVc7Z0JBWHRCLG1CQUFtQjs7OzhCQXlEekIsS0FBSzt1QkFDTCxLQUFLO2tDQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUVMLFNBQVMsU0FBQyxlQUFlOztJQWtJNUIsNEJBQUM7Q0FBQSxBQS9LRCxJQStLQztTQWxKWSxxQkFBcUI7OztJQUNoQyxnREFBb0I7O0lBQ3BCLDRDQUEyQjs7SUFDM0IsOENBQWM7O0lBQ2QsMENBQWlCOztJQUNqQiwwQ0FBVTs7SUFFViw0Q0FBNkI7O0lBQzdCLHFDQUFzQjs7SUFDdEIsZ0RBQThCOztJQUM5Qix3Q0FBMkI7O0lBQzNCLDBDQUE2Qjs7SUFDN0Isd0NBQTJCOztJQUMzQixnREFBZ0M7O0lBQ2hDLDJDQUE0Qjs7SUFFNUIsMENBQzRCOzs7OztJQUUxQix5Q0FBaUM7Ozs7O0lBQ2pDLHVDQUF5Qjs7Ozs7SUFDekIsc0NBQTBCOzs7OztJQUMxQixtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3F1ZXN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3Rpb25MaXN0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XHJcbmltcG9ydCB7IEdhbWlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ2FtaWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbnN3ZXIsIEJhY2tlbmRSZXNwb25zZSB9IGZyb20gJy4uL3NoYXJlZC9kYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICB0cmFuc2l0aW9uLFxyXG4gIHN0eWxlLFxyXG4gIGFuaW1hdGUsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBwdWxzZUFuaW1hdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgUmV3YXJkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcmV3YXJkLWRpYWxvZy9yZXdhcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJld2FyZCB7XHJcbiAgcG9zaXRpb246IG51bWJlcjtcclxuICB1bmxvY2tlZDogYm9vbGVhbjtcclxuICAvLyBsYWJlbDogc3RyaW5nO1xyXG4gIGljb246IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1xdWVzdGlvbi1yb29tJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcXVlc3Rpb24tcm9vbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcXVlc3Rpb24tcm9vbS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2ZhZGVJbicsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmluY3JlbWVudCcsIFtcclxuICAgICAgICBhbmltYXRlKFxyXG4gICAgICAgICAgJzUwMG1zJyxcclxuICAgICAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pLFxyXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMScgfSlcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgKVxyXG4gICAgICBdKVxyXG4gICAgXSksXHJcbiAgICB0cmlnZ2VyKCd1bmxvY2tSZXdhcmQnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJ2ZhbHNlID0+IHRydWUnLCBbXHJcbiAgICAgICAgdXNlQW5pbWF0aW9uKHB1bHNlQW5pbWF0aW9uLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgdGltaW5nczogJzQwMG1zIGN1YmljLWJlemllciguMTEsLjk5LC44MywuNDMpJyxcclxuICAgICAgICAgICAgc2NhbGU6IDEuNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIGN1cnJlbnRRdWVzdGlvbiA9IDA7XHJcbiAgdGVtcEFuc3dlcnM6IEFuc3dlcltdID0gW107XHJcbiAgbG9ja2VkUmV3YXJkcztcclxuICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gIHRoYW5rc0dpZjtcclxuXHJcbiAgQElucHV0KCkgbWF4UHJvZ3Jlc3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBkb25lOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVudEluc3RhbmNlOiBhbnk7XHJcbiAgQElucHV0KCkgcmV3YXJkczogUmV3YXJkW107XHJcbiAgQElucHV0KCkgcXVlc3Rpb25zOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBhbnN3ZXJzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBzaG93UHJvZ3Jlc3NiYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGFuc3dlck1vZGU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2VsZWN0aW9uTGlzdCcpXHJcbiAgc2VsZWN0aW9uOiBNYXRTZWxlY3Rpb25MaXN0O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHByaXZhdGUgc25hY2s6IE1hdFNuYWNrQmFyLFxyXG4gICAgcHJpdmF0ZSBnZjogR2FtaWZpY2F0aW9uU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRvVXBkYXRlUmV3YXJkcygpO1xyXG4gICAgdGhpcy50aGFua3NHaWYgPSB0aGlzLmdmLmdldFJhbmRvbUdpZigncGFydHknKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRvbmUpIHtcclxuICAgICAgdGhpcy5kb1VwZGF0ZVJld2FyZHMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmN1cnJlbnRJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRJbnN0YW5jZS50ZXh0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBpc0RvbmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kb25lICE9IG51bGwgJiYgdGhpcy5kb25lID49IHRoaXMubWF4UHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICBzZW5kQW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhbnN3ZXJzVG9CYWNrZW5kID0gdGhpcy50ZW1wQW5zd2Vycy5jb25jYXQodGhpcy5jcmVhdGVBbnN3ZXIoYW5zd2VyKSk7XHJcbiAgICB0aGlzLnRlbXBBbnN3ZXJzID0gW107XHJcbiAgICB0aGlzLnF1ZXN0aW9uLmhhbmRsZVN1Ym1pdHRlZEFuc3dlcnMoYW5zd2Vyc1RvQmFja2VuZCk7XHJcbiAgfVxyXG5cclxuICBjbGFpbVJld2FyZChyZXdhcmQpIHtcclxuICAgIGlmIChyZXdhcmQudW5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5kaWFsb2cub3BlbihSZXdhcmREaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgICBkYXRhOiB7IHRvdGFsOiByZXdhcmQudG90YWwgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSBrZXlib2FyZCBpbnRlcmFjdGlvblxyXG4gICAqIE9ubHkgd29ya2luZyBoYXJkY29kZWQgZm9yIGJpbmFyeSBhdG1cclxuICAgKi9cclxuICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuYW5zd2VyTW9kZSAhPT0gJ2JpbmFyeScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICB0aGlzLnN1Ym1pdEFuc3dlcigneWVzJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgIHRoaXMuc3VibWl0QW5zd2VyKCdubycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1VwJzpcclxuICAgICAgICB0aGlzLnN1Ym1pdEFuc3dlcignbWF5YmUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQW5zd2VyKGFuc3dlcjogc3RyaW5nKTogQW5zd2VyIHtcclxuICAgIGxldCBuZXdBbnN3ZXI6IEFuc3dlcjtcclxuICAgIG5ld0Fuc3dlciA9IHtcclxuICAgICAgZG9jdW1lbnRJZDogdGhpcy5jdXJyZW50SW5zdGFuY2UuaWQsXHJcbiAgICAgIHF1ZXN0aW9uSWQ6IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uXSxcclxuICAgICAgYW5zd2VyOiBhbnN3ZXJcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3QW5zd2VyO1xyXG4gIH1cclxuXHJcbiAgLy8gVHJhY2tpbmcgdGhlIHRlbXAgcmV3YXJkcyBpcyBuZWNlc3NhcnkgdG8gcmVhY3QgdG8gdW5sb2NrZWQgcmV3YXJkc1xyXG4gIC8vIFRoaXMgbWlnaHQgbmVlZCBhbiBvdmVyaGF1bCBzaW5jZSBpdCdzIHRvbyBjb21wbGljYXRlZFxyXG4gIHByaXZhdGUgdXBkYXRlUmV3YXJkcygpIHtcclxuICAgIGNvbnN0IGxvY2tlZCA9IHRoaXMucmV3YXJkcy5maWx0ZXIocmV3YXJkID0+IHJld2FyZC51bmxvY2tlZCA9PT0gZmFsc2UpO1xyXG4gICAgY29uc3QgdG1wTG9ja2VkID0gbG9ja2VkO1xyXG4gICAgdGhpcy5kb1VwZGF0ZVJld2FyZHMoKTtcclxuICAgIHRoaXMubG9ja2VkUmV3YXJkcyA9IHRoaXMucmV3YXJkcy5maWx0ZXIoXHJcbiAgICAgIHJld2FyZCA9PiByZXdhcmQudW5sb2NrZWQgPT09IGZhbHNlXHJcbiAgICApO1xyXG4gICAgaWYgKHRoaXMubG9ja2VkUmV3YXJkcy5sZW5ndGggPCB0bXBMb2NrZWQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY2xhaW1SZXdhcmQodG1wTG9ja2VkWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZG9VcGRhdGVSZXdhcmRzKCkge1xyXG4gICAgY29uc3QgbG9ja2VkID0gdGhpcy5yZXdhcmRzLmZpbHRlcihyZXdhcmQgPT4gcmV3YXJkLnVubG9ja2VkID09PSBmYWxzZSk7XHJcbiAgICAvLyBVcGRhdGUgdW5sb2NrIHN0YXR1cyBmbGFnIG9uIGFsbCByZXdhcmRzXHJcbiAgICBsb2NrZWQuZm9yRWFjaChyZXdhcmQgPT4ge1xyXG4gICAgICBpZiAoKHRoaXMuZG9uZSAvIHRoaXMubWF4UHJvZ3Jlc3MpICogMTAwID49IHJld2FyZC5wb3NpdGlvbikge1xyXG4gICAgICAgIHJld2FyZC51bmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmV3YXJkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXRBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbiArIDEgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy50ZW1wQW5zd2VycyA9IFsuLi50aGlzLnRlbXBBbnN3ZXJzLCB0aGlzLmNyZWF0ZUFuc3dlcihhbnN3ZXIpXTtcclxuICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgLy8gT25lIEl0ZXJhdGlvbiBvZiBRdWVzdGlvbi1QYWNrYWdlIGRvbmVcclxuICAgICAgdGhpcy5zZW5kQW5zd2VyKGFuc3dlcik7XHJcbiAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gMDtcclxuICAgICAgdGhpcy5kb25lKys7XHJcbiAgICAgIHRoaXMudXBkYXRlUmV3YXJkcygpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5tb2NrQWNoaWV2ZW1lbnRDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbW9ja0FjaGlldmVtZW50Q2hlY2soKSB7XHJcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMDUpIHtcclxuICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSArIDc1O1xyXG4gICAgICB0aGlzLnNuYWNrLm9wZW4ocGVyY2VudCArICclIGRlaW5lciBLb2xsZWdlbiB3w6RobHRlbiBkYXNzZWxiZSDwn5iBJywgJ09LJywge1xyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluaXNoKCkge1xyXG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ29vLmdsL2Zvcm1zL0J6YWdkSXNVT3k2aEEyd0IyJywgJ19ibGFuaycpO1xyXG4gIH1cclxufVxyXG4iXX0=