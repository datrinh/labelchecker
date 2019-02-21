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
    function QuestionRoomComponent(question, gamification, dialog, snack) {
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
    QuestionRoomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.doUpdateRewards();
        console.log(this.done, this.maxProgress);
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
    };
    /**
     * @return {?}
     */
    QuestionRoomComponent.prototype.isDone = /**
     * @return {?}
     */
    function () {
        return !(this.done < this.maxProgress);
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
        console.log(this.lockedRewards, tmpLocked);
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
                console.log(reward);
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
            // One Iteration of Question-Package done
            this.sendAnswer(answer);
            this.currentQuestion = 0;
            this.done++;
            this.updateRewards();
        }
        this.mockAchievementCheck();
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
    QuestionRoomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-question-room',
                    template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <!-- <i\r\n        *ngIf=\"reward.unlocked;else locked\"\r\n        class=\"fas fa-gift unlocked\"\r\n        matTooltip=\"\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      ></i> -->\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n      <!-- <img\r\n        src=\"assets/gift.png\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        (click)=\"claimReward(reward.unlocked)\"\r\n        matTooltip=\"Noch nicht freigeschalten!\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      /> -->\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\">\r\n    <!-- <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\"> -->\r\n    <p *ngIf=\"!isDone(); else labelingDone\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #labelingDone>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n        <p>Verarbeite Daten...</p>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-card-header class=\"question-text\">\r\n      <mat-card-title>\r\n        <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'binary'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer | translate }}\r\n        </button>\r\n      </mat-card-actions>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'stars'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer | translate }}\r\n        </button>\r\n        <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n      </mat-card-actions>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n",
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
    QuestionRoomComponent.ctorParameters = function () { return [
        { type: QuestionService },
        { type: GamificationService },
        { type: MatDialog },
        { type: MatSnackBar }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24tcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvcXVlc3Rpb24tcm9vbS9xdWVzdGlvbi1yb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFFakYsNEJBS0M7OztJQUpDLDBCQUFpQjs7SUFDakIsMEJBQWtCOztJQUVsQixzQkFBYTs7QUFHZjtJQTZDRSwrQkFDVSxRQUF5QixFQUN6QixZQUFpQyxFQUNqQyxNQUFpQixFQUNqQixLQUFrQjtRQUhsQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBbkI1QixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQVNsQixvQkFBZSxHQUFHLElB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UztnQkFBRSxXQUFXOzs7OEJBNEM1QixLQUFLO3VCQUNMLEtBQUs7a0NBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NEJBRUwsU0FBUyxTQUFDLGVBQWU7O0lBdUg1Qiw0QkFBQztDQUFBLEFBbEtELElBa0tDO1NBcklZLHFCQUFxQjs7O0lBQ2hDLGdEQUFvQjs7SUFDcEIsNENBQTJCOztJQUMzQiw4Q0FBYzs7SUFFZCw0Q0FBNkI7O0lBQzdCLHFDQUFzQjs7SUFDdEIsZ0RBQThCOztJQUM5Qix3Q0FBMkI7O0lBQzNCLDBDQUE2Qjs7SUFDN0Isd0NBQTJCOztJQUMzQixnREFBZ0M7O0lBQ2hDLDJDQUE0Qjs7SUFFNUIsMENBQzRCOzs7OztJQUUxQix5Q0FBaUM7Ozs7O0lBQ2pDLDZDQUF5Qzs7Ozs7SUFDekMsdUNBQXlCOzs7OztJQUN6QixzQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9xdWVzdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0aW9uTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQgeyBHYW1pZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW5zd2VyLCBCYWNrZW5kUmVzcG9uc2UgfSBmcm9tICcuLi9zaGFyZWQvZGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgdHJhbnNpdGlvbixcclxuICBzdHlsZSxcclxuICBhbmltYXRlLFxyXG4gIGtleWZyYW1lcyxcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgcHVsc2VBbmltYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFJld2FyZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Jld2FyZC1kaWFsb2cvcmV3YXJkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmQge1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgdW5sb2NrZWQ6IGJvb2xlYW47XHJcbiAgLy8gbGFiZWw6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtcXVlc3Rpb24tcm9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9uLXJvb20uY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzppbmNyZW1lbnQnLCBbXHJcbiAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICc1MDBtcycsXHJcbiAgICAgICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSxcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzEnIH0pXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIClcclxuICAgICAgXSlcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcigndW5sb2NrUmV3YXJkJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCdmYWxzZSA9PiB0cnVlJywgW1xyXG4gICAgICAgIHVzZUFuaW1hdGlvbihwdWxzZUFuaW1hdGlvbiwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHRpbWluZ3M6ICc0MDBtcyBjdWJpYy1iZXppZXIoLjExLC45OSwuODMsLjQzKScsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgY3VycmVudFF1ZXN0aW9uID0gMDtcclxuICB0ZW1wQW5zd2VyczogQW5zd2VyW10gPSBbXTtcclxuICBsb2NrZWRSZXdhcmRzO1xyXG5cclxuICBASW5wdXQoKSBtYXhQcm9ncmVzczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRvbmU6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXJyZW50SW5zdGFuY2U6IGFueTtcclxuICBASW5wdXQoKSByZXdhcmRzOiBSZXdhcmRbXTtcclxuICBASW5wdXQoKSBxdWVzdGlvbnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGFuc3dlcnM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHNob3dQcm9ncmVzc2JhciA9IHRydWU7XHJcbiAgQElucHV0KCkgYW5zd2VyTW9kZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3Rpb25MaXN0JylcclxuICBzZWxlY3Rpb246IE1hdFNlbGVjdGlvbkxpc3Q7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGdhbWlmaWNhdGlvbjogR2FtaWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIHNuYWNrOiBNYXRTbmFja0JhclxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRvVXBkYXRlUmV3YXJkcygpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kb25lLCB0aGlzLm1heFByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRvbmUpIHtcclxuICAgICAgdGhpcy5kb1VwZGF0ZVJld2FyZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRG9uZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuZG9uZSA8IHRoaXMubWF4UHJvZ3Jlc3MpO1xyXG4gIH1cclxuXHJcbiAgc2VuZEFuc3dlcihhbnN3ZXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgYW5zd2Vyc1RvQmFja2VuZCA9IHRoaXMudGVtcEFuc3dlcnMuY29uY2F0KHRoaXMuY3JlYXRlQW5zd2VyKGFuc3dlcikpO1xyXG4gICAgdGhpcy50ZW1wQW5zd2VycyA9IFtdO1xyXG4gICAgdGhpcy5xdWVzdGlvbi5oYW5kbGVTdWJtaXR0ZWRBbnN3ZXJzKGFuc3dlcnNUb0JhY2tlbmQpO1xyXG4gIH1cclxuXHJcbiAgY2xhaW1SZXdhcmQocmV3YXJkKSB7XHJcbiAgICBpZiAocmV3YXJkLnVubG9ja2VkKSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oUmV3YXJkRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGF0YTogeyB0b3RhbDogcmV3YXJkLnRvdGFsIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cclxuICAgKiBPbmx5IHdvcmtpbmcgaGFyZGNvZGVkIGZvciBiaW5hcnkgYXRtXHJcbiAgICovXHJcbiAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFuc3dlck1vZGUgIT09ICdiaW5hcnknKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ3llcycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICB0aGlzLnN1Ym1pdEFuc3dlcignbm8nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBbnN3ZXIoJ21heWJlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUFuc3dlcihhbnN3ZXI6IHN0cmluZyk6IEFuc3dlciB7XHJcbiAgICBsZXQgbmV3QW5zd2VyOiBBbnN3ZXI7XHJcbiAgICBuZXdBbnN3ZXIgPSB7XHJcbiAgICAgIGRvY3VtZW50SWQ6IHRoaXMuY3VycmVudEluc3RhbmNlLmlkLFxyXG4gICAgICBxdWVzdGlvbklkOiB0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbl0sXHJcbiAgICAgIGFuc3dlcjogYW5zd2VyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG5ld0Fuc3dlcjtcclxuICB9XHJcblxyXG4gIC8vIFRyYWNraW5nIHRoZSB0ZW1wIHJld2FyZHMgaXMgbmVjZXNzYXJ5IHRvIHJlYWN0IHRvIHVubG9ja2VkIHJld2FyZHNcclxuICAvLyBUaGlzIG1pZ2h0IG5lZWQgYW4gb3ZlcmhhdWwgc2luY2UgaXQncyB0b28gY29tcGxpY2F0ZWRcclxuICBwcml2YXRlIHVwZGF0ZVJld2FyZHMoKSB7XHJcbiAgICBjb25zdCBsb2NrZWQgPSB0aGlzLnJld2FyZHMuZmlsdGVyKHJld2FyZCA9PiByZXdhcmQudW5sb2NrZWQgPT09IGZhbHNlKTtcclxuICAgIGNvbnN0IHRtcExvY2tlZCA9IGxvY2tlZDtcclxuICAgIHRoaXMuZG9VcGRhdGVSZXdhcmRzKCk7XHJcbiAgICB0aGlzLmxvY2tlZFJld2FyZHMgPSB0aGlzLnJld2FyZHMuZmlsdGVyKFxyXG4gICAgICByZXdhcmQgPT4gcmV3YXJkLnVubG9ja2VkID09PSBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLmxvY2tlZFJld2FyZHMubGVuZ3RoIDwgdG1wTG9ja2VkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmNsYWltUmV3YXJkKHRtcExvY2tlZFswXSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2tlZFJld2FyZHMsIHRtcExvY2tlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvVXBkYXRlUmV3YXJkcygpIHtcclxuICAgIGNvbnN0IGxvY2tlZCA9IHRoaXMucmV3YXJkcy5maWx0ZXIocmV3YXJkID0+IHJld2FyZC51bmxvY2tlZCA9PT0gZmFsc2UpO1xyXG4gICAgLy8gVXBkYXRlIHVubG9jayBzdGF0dXMgZmxhZyBvbiBhbGwgcmV3YXJkc1xyXG4gICAgbG9ja2VkLmZvckVhY2gocmV3YXJkID0+IHtcclxuICAgICAgaWYgKCh0aGlzLmRvbmUgLyB0aGlzLm1heFByb2dyZXNzKSAqIDEwMCA+PSByZXdhcmQucG9zaXRpb24pIHtcclxuICAgICAgICByZXdhcmQudW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJld2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0QW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gKyAxIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudGVtcEFuc3dlcnMgPSBbLi4udGhpcy50ZW1wQW5zd2VycywgdGhpcy5jcmVhdGVBbnN3ZXIoYW5zd2VyKV07XHJcbiAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPbmUgSXRlcmF0aW9uIG9mIFF1ZXN0aW9uLVBhY2thZ2UgZG9uZVxyXG4gICAgICB0aGlzLnNlbmRBbnN3ZXIoYW5zd2VyKTtcclxuICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmRvbmUrKztcclxuICAgICAgdGhpcy51cGRhdGVSZXdhcmRzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vY2tBY2hpZXZlbWVudENoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBtb2NrQWNoaWV2ZW1lbnRDaGVjaygpIHtcclxuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wNSkge1xyXG4gICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICsgNzU7XHJcbiAgICAgIHRoaXMuc25hY2sub3BlbihwZXJjZW50ICsgJyUgZGVpbmVyIEtvbGxlZ2VuIHfDpGhsdGVuIGRhc3NlbGJlIPCfmIEnLCAnT0snLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==