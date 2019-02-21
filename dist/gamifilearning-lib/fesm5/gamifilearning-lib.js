import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { __spread } from 'tslib';
import '@angular/material/list';
import { BehaviorSubject, of } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatInputModule, MatTableModule, MatToolbarModule, MatBadgeModule, MatListModule, MatProgressSpinnerModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { style, animation, animate, keyframes, trigger, transition, useAnimation } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { Component, Injectable, Inject, Pipe, defineInjectable, inject, NgModule, Input, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    /**
     * @return {?}
     */
    RootComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.communication.loadData().subscribe(res => {
        //   this.texts = res;
        // });
        // this.questions = QUESTIONS;
    };
    RootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-root',
                    template: "<div class=\"wrapper\">\r\n  <gl-navbar></gl-navbar>\r\n  <!--\r\n    <gl-question-room\r\n      [texts]=\"texts | async\"\r\n      [questions]=\"questions\"\r\n    ></gl-question-room>\r\n  -->\r\n</div>\r\n",
                    styles: [".wrapper{background-color:#eee;height:100vh;display:-ms-grid;display:grid;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr;-ms-grid-columns:50px 1fr 50px;grid-template-columns:50px 1fr 50px}gl-navbar{-ms-grid-column:1;-ms-grid-column-span:3;grid-column:1/4}gl-question-room{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:2;-ms-grid-row-span:5;grid-row:2/7}"]
                }] }
    ];
    /** @nocollapse */
    RootComponent.ctorParameters = function () { return []; };
    return RootComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.cards = [
            { title: 'Card 1', cols: 1, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 1 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    DashboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-dashboard',
                    template: "<div class=\"grid-container\">\r\n  <h1 class=\"mat-h1\">Dashboard</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Leaderboard\r\n            <button\r\n              mat-icon-button\r\n              class=\"more-button\"\r\n              [matMenuTriggerFor]=\"menu\"\r\n              aria-label=\"Toggle menu\"\r\n            >\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Expand</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <!-- <app-leaderboard></app-leaderboard> -->\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{ card.title }}\r\n            <button\r\n              mat-icon-button\r\n              class=\"more-button\"\r\n              [matMenuTriggerFor]=\"menu\"\r\n              aria-label=\"Toggle menu\"\r\n            >\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Expand</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div>Card Content Here</div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n",
                    styles: [".grid-container{padding:20px}.dashboard-card{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button{position:absolute;top:5px;right:10px}"]
                }] }
    ];
    /** @nocollapse */
    DashboardComponent.ctorParameters = function () { return []; };
    return DashboardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent() {
        this.columnsToDisplay = ['rank', 'userName', 'score'];
        this.users = [
            { name: 'Phil', rank: '1', score: '555' },
            { name: 'Mill', rank: '2', score: '444' },
            { name: 'Bill', rank: '3', score: '333' },
            { name: 'Til', rank: '4', score: '222' }
        ];
    }
    /**
     * @return {?}
     */
    LeaderboardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LeaderboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-leaderboard',
                    template: "<table mat-table [dataSource]=\"users\">\r\n  <ng-container matColumnDef=\"rank\">\r\n    <th mat-header-cell *matHeaderCellDef> Rank </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.rank}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"userName\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"score\">\r\n    <th mat-header-cell *matHeaderCellDef> Score </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.score}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\r\n</table>",
                    styles: ["table{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    LeaderboardComponent.ctorParameters = function () { return []; };
    return LeaderboardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NUMBER_OF_TEXTS = 5;
/** @type {?} */
var UNLABELED_INDEX = 31;
/** @type {?} */
var ENTROPY_INDEX = 32;
/** @type {?} */
var URL_TO_DATA = './assets/data/mainTfIdf.05112018.feature.json';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.data = [];
        this.currentInstance = new BehaviorSubject(null);
        this.currentInstance$ = this.currentInstance.asObservable();
        this.answers = new BehaviorSubject([]);
        this.answers$ = this.answers.asObservable();
        // this.updateNextInstance();
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    QuestionService.prototype.getUnlabeledInstances = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        if (data === void 0) { data = this.data; }
        return data.filter(function (feature) { return feature.features[1][UNLABELED_INDEX] != null; });
    };
    /**
     * Return top scoring data objects
     * @param data corresponding data set
     * @param number number of instances to return
     */
    /**
     * Return top scoring data objects
     * @param {?} data corresponding data set
     * @param {?=} number number of instances to return
     * @return {?}
     */
    QuestionService.prototype.getTopInstances = /**
     * Return top scoring data objects
     * @param {?} data corresponding data set
     * @param {?=} number number of instances to return
     * @return {?}
     */
    function (data, number) {
        if (number === void 0) { number = NUMBER_OF_TEXTS; }
        /** @type {?} */
        var unlabeled = this.getUnlabeledInstances(data);
        return unlabeled
            .sort(function (a, b) {
            if (a.features[1][ENTROPY_INDEX] < b.features[1][ENTROPY_INDEX]) {
                return 1;
            }
            else {
                return -1;
            }
        })
            .slice(0, number);
    };
    /**
     * @param {?} answers
     * @return {?}
     */
    QuestionService.prototype.handleSubmittedAnswers = /**
     * @param {?} answers
     * @return {?}
     */
    function (answers) {
        this.answers.next(answers);
    };
    QuestionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    QuestionService.ctorParameters = function () { return []; };
    /** @nocollapse */ QuestionService.ngInjectableDef = defineInjectable({ factory: function QuestionService_Factory() { return new QuestionService(); }, token: QuestionService, providedIn: "root" });
    return QuestionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GIPHY_API_KEY = 'n8VZGDtSpax8HM6j486SScMj5vMcavN2';
/** @type {?} */
var GIPHY_URL = 'http://api.giphy.com/v1/gifs/search';
var GamificationService = /** @class */ (function () {
    function GamificationService(http) {
        var _this = this;
        this.http = http;
        this.score = new BehaviorSubject(0);
        this.score$ = this.score.asObservable();
        this.progress = new BehaviorSubject(0);
        this.progress$ = this.progress.asObservable();
        this.fetchScore().subscribe(function (score) { return _this.score.next(score); });
    }
    /**
     * @param {?} weight
     * @return {?}
     */
    GamificationService.prototype.increaseScore = /**
     * @param {?} weight
     * @return {?}
     */
    function (weight) {
        var _this = this;
        this.doIncreaseScore(weight).subscribe(function (score) { return _this.score.next(score); });
        // this.score.next(this.score.value + Math.floor(weight * 100));
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    GamificationService.prototype.getTrivia = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (date === void 0) { date = new Date(); }
        return this.http.get("http://numbersapi.com/" + (date.getMonth() + 1) + "/" + date.getDate() + "/date", {
            responseType: 'text'
        });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    GamificationService.prototype.getRandomGif = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        return this.http
            .get(GIPHY_URL, {
            params: {
                api_key: GIPHY_API_KEY,
                limit: '50',
                rating: 'g',
                q: query
            }
        })
            .pipe(
        // chose a random gif out of the array of gifs
        map(function (gif) { return _this.getRandomElement(gif.data); }));
    };
    // currently mocked. Should be persisted in backend later
    // currently mocked. Should be persisted in backend later
    /**
     * @private
     * @return {?}
     */
    GamificationService.prototype.fetchScore = 
    // currently mocked. Should be persisted in backend later
    /**
     * @private
     * @return {?}
     */
    function () {
        return of(500);
    };
    // currently mocked too
    // currently mocked too
    /**
     * @private
     * @param {?} weight
     * @return {?}
     */
    GamificationService.prototype.doIncreaseScore = 
    // currently mocked too
    /**
     * @private
     * @param {?} weight
     * @return {?}
     */
    function (weight) {
        return of(this.score.value + Math.floor(weight * 100));
    };
    /** Helper function to chose a random element from an array */
    /**
     * Helper function to chose a random element from an array
     * @private
     * @template T
     * @param {?} array
     * @return {?}
     */
    GamificationService.prototype.getRandomElement = /**
     * Helper function to chose a random element from an array
     * @private
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    GamificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GamificationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ GamificationService.ngInjectableDef = defineInjectable({ factory: function GamificationService_Factory() { return new GamificationService(inject(HttpClient)); }, token: GamificationService, providedIn: "root" });
    return GamificationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var pulseAnimation = animation([
    style({ transform: 'scale(1)' }),
    animate('{{ timings }}', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale({{ scale }})', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 })
    ]))
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RewardDialogComponent = /** @class */ (function () {
    function RewardDialogComponent(gamification, data) {
        this.gamification = gamification;
        this.data = data;
        this.trivia = this.gamification.getTrivia();
        this.thanksPic = this.gamification.getRandomGif('thanks');
        this.moneyPic = this.gamification.getRandomGif('rich');
    }
    /**
     * @return {?}
     */
    RewardDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.total = this.data.total;
    };
    RewardDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-reward-dialog',
                    template: "<h2 mat-dialog-title>Wohoo!</h2>\n<mat-dialog-content>\n  <p>\n    Du hast weitere 5 Euro verdient! Damit hast du insgesamt\n    <b>{{ total }} Euro</b> auf dem Konto!\n  </p>\n  <img src=\"{{ (moneyPic | async)?.images.original.url }}\" />\n  <h3>Hast du gewusst?</h3>\n  <p>{{ trivia | async }}</p>\n  <!-- <h2>And also</h2>\n  <img\n    src=\"{{ (thanksPic | async)?.images.original.url }}\"\n    alt=\"Belohnungs-GIF\"\n    width=\"75%\"\n  /> -->\n</mat-dialog-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RewardDialogComponent.ctorParameters = function () { return [
        { type: GamificationService },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return RewardDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            this.tempAnswers = __spread(this.tempAnswers, [this.createAnswer(answer)]);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return []; };
    /** @nocollapse */ UserService.ngInjectableDef = defineInjectable({ factory: function UserService_Factory() { return new UserService(); }, token: UserService, providedIn: "root" });
    return UserService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(user, gamificationService) {
        this.user = user;
        this.gamificationService = gamificationService;
        this.gamification = this.gamificationService;
    }
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-navbar',
                    template: "<!--\r\n  <mat-toolbar color=\"primary\">\r\n    <span class=\"spacer\"></span>\r\n\r\n    <div *ngIf=\"user.isLogged(); else: notLogged\">\r\n      <gl-score-display></gl-score-display>\r\n      <button [matMenuTriggerFor]=\"menu\" class=\"toolbar-item\" mat-icon-button>\r\n        <mat-icon matBadge=\"4\" matBadgeColor=\"accent\">person</mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <ng-template #notLogged> <button mat-button>Login</button> </ng-template>\r\n  </mat-toolbar>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item disabled>Kontostand</button>\r\n    <button mat-menu-item disabled>Katzenvideos</button>\r\n    <button\r\n      mat-menu-item\r\n      routerLinkActive=\"router-link-active\"\r\n      (click)=\"user.logout()\"\r\n    >\r\n      Logout\r\n    </button>\r\n  </mat-menu>\r\n-->\r\n",
                    styles: [".spacer{flex:1 1 auto}.toolbar-item{margin:0 14px}"]
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: GamificationService }
    ]; };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.view = undefined;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Number';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Color Value';
        this.timeline = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.multi = [
            {
                name: 'Accuracy',
                value: 83
            },
            {
                name: 'F1 Score',
                value: 91
            }
        ];
    }
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-chart',
                    template: "<!--\r\n  <ngx-charts-number-card [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"multi\" [cardColor]=\"'#263238'\" [textColor]=\"'white'\"></ngx-charts-number-card>\r\n-->\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return []; };
    return ChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Very quick and dirty solution to "translate" Ids from backend
 * Angular i18n currently can't translate variables
 * ngx-translate would add another dependency
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        switch (value) {
            case 'isEvent':
                return 'Beschreibt der Text eine <b>Veranstaltung</b>?';
            case 'isMusic':
                return 'Geht es inhaltlich um <b>Musik</b>?';
            case 'isMovie':
                return 'Geht es inhaltlich um <b>Filme</b>?';
            case 'yes':
                return 'Ja';
            case 'no':
                return 'Nein';
            case 'maybe':
                return 'Unklar';
            case '1':
                return 'Trifft nicht zu';
            case '2':
                return 'Trifft eher nicht zu';
            case '3':
                return 'Weiß nicht';
            case '4':
                return 'Trifft eher zu';
            case '5':
                return 'Trifft zu';
            default:
                return value;
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate'
                },] }
    ];
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommunicationService = /** @class */ (function () {
    function CommunicationService(http) {
        this.http = http;
        this.data = [];
    }
    /**
     * @param {?=} src
     * @return {?}
     */
    CommunicationService.prototype.loadData = /**
     * @param {?=} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        if (src === void 0) { src = URL_TO_DATA; }
        return this.http
            .get(URL_TO_DATA)
            .pipe(map(function (res) { return _this.enhanceFeatures(res); }));
    };
    /** Mocking data to add unlabeled data and selectionScore (entropy) */
    /**
     * Mocking data to add unlabeled data and selectionScore (entropy)
     * @param {?} data
     * @return {?}
     */
    CommunicationService.prototype.enhanceFeatures = /**
     * Mocking data to add unlabeled data and selectionScore (entropy)
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var features = data;
        for (var i = 0; i < features.length / 2; i++) {
            features[i]['features'][1][UNLABELED_INDEX] = 0;
            features[i]['features'][1][ENTROPY_INDEX] = Math.random();
        }
        return features;
    };
    CommunicationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommunicationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CommunicationService.ngInjectableDef = defineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(inject(HttpClient)); }, token: CommunicationService, providedIn: "root" });
    return CommunicationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GLModule, RootComponent, QuestionRoomComponent, ScoreDisplayComponent, NavbarComponent, LeaderboardComponent, ChartComponent, DashboardComponent, CommunicationService, QuestionService, UserService, GamificationService, RewardDialogComponent as ɵb, pulseAnimation as ɵa, TranslatePipe as ɵc };

//# sourceMappingURL=gamifilearning-lib.js.map