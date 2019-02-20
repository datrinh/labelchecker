(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/gamifilearning-lib/fesm5/gamifilearning-lib.js":
/*!*************************************************************!*\
  !*** ./dist/gamifilearning-lib/fesm5/gamifilearning-lib.js ***!
  \*************************************************************/
/*! exports provided: GLModule, RootComponent, QuestionRoomComponent, ScoreDisplayComponent, NavbarComponent, LeaderboardComponent, ChartComponent, DashboardComponent, CommunicationService, QuestionService, UserService, GamificationService, ɵb, ɵa, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLModule", function() { return GLModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRoomComponent", function() { return QuestionRoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreDisplayComponent", function() { return ScoreDisplayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationService", function() { return GamificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RewardDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return pulseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TranslatePipe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
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
        this.currentInstance = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.currentInstance$ = this.currentInstance.asObservable();
        this.answers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    QuestionService.ctorParameters = function () { return []; };
    /** @nocollapse */ QuestionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({ factory: function QuestionService_Factory() { return new QuestionService(); }, token: QuestionService, providedIn: "root" });
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
        this.score = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.score$ = this.score.asObservable();
        this.progress = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (gif) { return _this.getRandomElement(gif.data); }));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(500);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.score.value + Math.floor(weight * 100));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GamificationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }
    ]; };
    /** @nocollapse */ GamificationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({ factory: function GamificationService_Factory() { return new GamificationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"])); }, token: GamificationService, providedIn: "root" });
    return GamificationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var pulseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('{{ timings }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale({{ scale }})', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'scale(1)', offset: 1 })
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
        this.moneyPic = this.gamification.getRandomGif('money');
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'gl-reward-dialog',
                    template: "<h2 mat-dialog-title>Wohoo!</h2>\n<mat-dialog-content>\n  <p>\n    Du hast weitere 5 Euro verdient! Damit hast du insgesamt\n    <b>{{ total }} Euro</b> auf dem Konto!\n  </p>\n  <img src=\"{{ (moneyPic | async)?.images.original.url }}\" />\n  <h3>Hast du gewusst?</h3>\n  <p>{{ trivia | async }}</p>\n  <!-- <h2>And also</h2>\n  <img\n    src=\"{{ (thanksPic | async)?.images.original.url }}\"\n    alt=\"Belohnungs-GIF\"\n    width=\"75%\"\n  /> -->\n</mat-dialog-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RewardDialogComponent.ctorParameters = function () { return [
        { type: GamificationService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
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
        this.updateRewards();
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
        var _this = this;
        /** @type {?} */
        var locked = this.rewards.filter(function (reward) { return reward.unlocked === false; });
        /** @type {?} */
        var tmpLocked = locked;
        // Update unlock status flag on all rewards
        locked.forEach(function (reward) {
            if ((_this.done / _this.maxProgress) * 100 >= reward.position) {
                reward.unlocked = true;
            }
        });
        this.lockedRewards = this.rewards.filter(function (reward) { return reward.unlocked === false; });
        if (this.lockedRewards.length < tmpLocked.length) {
            this.claimReward(tmpLocked[0]);
        }
        console.log(this.lockedRewards, tmpLocked);
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
            this.tempAnswers = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(this.tempAnswers, [this.createAnswer(answer)]);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'gl-question-room',
                    template: "<section\r\n  (keyup)=\"onKey($event)\"\r\n  class=\"content\"\r\n  *ngIf=\"currentInstance\"\r\n  tabindex=\"-1\"\r\n>\r\n  <div class=\"progressbar-container\" *ngIf=\"showProgressbar\">\r\n    <span class=\"progress-label\">{{ done }} / {{ maxProgress }}</span>\r\n\r\n    <mat-progress-bar\r\n      mode=\"determinate\"\r\n      value=\"{{ (done / maxProgress) * 100 }}\"\r\n    ></mat-progress-bar>\r\n    <div\r\n      class=\"reward-icon\"\r\n      *ngFor=\"let reward of rewards\"\r\n      [ngStyle]=\"{ 'left.%': reward.position }\"\r\n    >\r\n      <!-- <i\r\n        *ngIf=\"reward.unlocked;else locked\"\r\n        class=\"fas fa-gift unlocked\"\r\n        matTooltip=\"\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      ></i> -->\r\n      <i\r\n        class=\"fas fa-gift\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        [matTooltip]=\"\r\n          reward.unlocked ? reward.total + ' Euro' : 'Noch nicht erreicht!'\r\n        \"\r\n      ></i>\r\n      <!-- <img\r\n        src=\"assets/gift.png\"\r\n        [@unlockReward]=\"reward.unlocked\"\r\n        [ngClass]=\"{ unlocked: reward.unlocked }\"\r\n        (click)=\"claimReward(reward.unlocked)\"\r\n        matTooltip=\"Noch nicht freigeschalten!\"\r\n        [matTooltipDisabled]=\"reward.unlocked\"\r\n      /> -->\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"text-card\">\r\n    <p *ngIf=\"!isDone(); else labelingDone\" [@fadeIn]=\"done\">\r\n      {{ currentInstance.text }}\r\n    </p>\r\n    <ng-template #labelingDone>\r\n      <div class=\"spinner-container\">\r\n        <mat-spinner></mat-spinner>\r\n        <p>Verarbeite Daten...</p>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"question-card\" *ngIf=\"!isDone()\">\r\n    <mat-card-header class=\"question-text\">\r\n      <mat-card-title>\r\n        <span [innerHtml]=\"questions[currentQuestion] | translate\"></span>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'binary'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer | translate }}\r\n        </button>\r\n      </mat-card-actions>\r\n      <mat-card-actions\r\n        *ngIf=\"answerMode === 'stars'\"\r\n        class=\"answer-buttons-container\"\r\n      >\r\n        <!-- <button mat-button disabled class=\"rating-info\">Wenig</button> -->\r\n        <button\r\n          mat-button\r\n          *ngFor=\"let answer of answers\"\r\n          class=\"answer-button\"\r\n          [ngClass]=\"answer\"\r\n          (click)=\"submitAnswer(answer)\"\r\n        >\r\n          {{ answer }}\r\n        </button>\r\n        <!-- <button mat-button disabled class=\"rating-info\">Viel</button> -->\r\n      </mat-card-actions>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeIn', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':increment', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '0' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: '1' })
                                ]))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('unlockReward', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('false => true', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])(pulseAnimation, {
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
    QuestionRoomComponent.ctorParameters = function () { return [
        { type: QuestionService },
        { type: GamificationService },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    QuestionRoomComponent.propDecorators = {
        maxProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        done: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        currentInstance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        rewards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        questions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        answers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        showProgressbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        answerMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        selection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['selectionList',] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return []; };
    /** @nocollapse */ UserService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({ factory: function UserService_Factory() { return new UserService(); }, token: UserService, providedIn: "root" });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'gl-score-display',
                    template: "<div class=\"align-vert\" [@scoreChange]=\"gamification.score$ | async\">\r\n  <mat-icon>star</mat-icon>\r\n  <span>{{ gamification.score$ | async }}</span>\r\n</div>\r\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('scoreChange', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':increment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])(pulseAnimation, {
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
            default:
                return value;
        }
    };
    TranslatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Pipe"], args: [{
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
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
];
var GLModule = /** @class */ (function () {
    function GLModule() {
    }
    GLModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
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
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                        MaterialModules,
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (res) { return _this.enhanceFeatures(res); }));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommunicationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }
    ]; };
    /** @nocollapse */ CommunicationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({ factory: function CommunicationService_Factory() { return new CommunicationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"])); }, token: CommunicationService, providedIn: "root" });
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



//# sourceMappingURL=gamifilearning-lib.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _labeling_labeling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labeling/labeling.component */ "./src/app/labeling/labeling.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logged-out/logged-out.component */ "./src/app/logged-out/logged-out.component.ts");







var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    { path: 'labeling', component: _labeling_labeling_component__WEBPACK_IMPORTED_MODULE_4__["LabelingComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'loggedOut', component: _logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_6__["LoggedOutComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/labeling' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'labelchecker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var gamifilearning_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gamifilearning-lib */ "./dist/gamifilearning-lib/fesm5/gamifilearning-lib.js");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _labeling_labeling_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./labeling/labeling.component */ "./src/app/labeling/labeling.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logged-out/logged-out.component */ "./src/app/logged-out/logged-out.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");















var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _labeling_labeling_component__WEBPACK_IMPORTED_MODULE_8__["LabelingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _logged_out_logged_out_component__WEBPACK_IMPORTED_MODULE_13__["LoggedOutComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                gamifilearning_lib__WEBPACK_IMPORTED_MODULE_6__["GLModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_7__["GraphQLModule"],
                MaterialModules,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.user.isLogged()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");





var AuthService = /** @class */ (function () {
    function AuthService(apollo) {
        this.apollo = apollo;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            login(username: \"", "\", password: \"", "\") {\n              id,\n              firstName,\n              lastName,\n              username,\n              jwtToken {\n                token\n              }\n            }\n          }\n        "], ["\n          {\n            login(username: \"", "\", password: \"", "\") {\n              id,\n              firstName,\n              lastName,\n              username,\n              jwtToken {\n                token\n              }\n            }\n          }\n        "])), username, password)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.user = res.data.login;
            _this.doLogin(_this.user);
            return _this.user;
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            logout\n          }\n        "], ["\n          {\n            logout\n          }\n        "])))
        })
            .subscribe(function (_) {
            // TODO: Logout throws error when token expired?
            _this.doLogout();
        }, function (err) {
            console.error(err);
            // logout when expired too;
            _this.doLogout();
        });
    };
    AuthService.prototype.getCurrentUserId = function () {
        return this.user.id || window.localStorage.getItem('userId') || null;
    };
    AuthService.prototype.isLogged = function () {
        return window.localStorage.getItem('token') ? true : false;
    };
    AuthService.prototype.doLogin = function (user) {
        window.localStorage.setItem('token', user.jwtToken.token);
        window.localStorage.setItem('userId', user.id.toString());
    };
    AuthService.prototype.doLogout = function () {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]])
    ], AuthService);
    return AuthService;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/communication/communication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/communication/communication.service.ts ***!
  \********************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var CommunicationService = /** @class */ (function () {
    function CommunicationService(apollo, auth, router, http) {
        this.apollo = apollo;
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.currentDocument = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentDocument$ = this.currentDocument.asObservable();
        this.mockProgress = {
            total: 1500,
            done: 99
        };
        this.init();
    }
    CommunicationService.prototype.init = function () {
        var _this = this;
        this.getNextDocument().subscribe(function (doc) {
            _this.currentDocument.next(doc);
        }, 
        // Kinda hacky. Logout should be handled
        function (err) {
            _this.auth.logout();
            _this.router.navigate(['login']);
        });
    };
    CommunicationService.prototype.getNextDocument = function () {
        // return this.apollo
        //   .query({
        //     query: gql`
        //       {
        //         getNextDocumentToLabel {
        //           id
        //           text
        //         }
        //       }
        //     `
        //   })
        //   .pipe(
        //     map((res: any) => {
        //       const nextDoc = {
        //         id: res.id,
        //         text: res.text
        //       };
        //       this.currentDocument.next(nextDoc);
        //       return nextDoc;
        //     })
        //   );
        var _this = this;
        // Mock
        return this.http
            .get('https://icanhazdadjoke.com/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                Accept: 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var nextDoc = {
                id: Math.floor(Math.random() * 100).toString(),
                text: res.joke
            };
            _this.currentDocument.next(nextDoc);
            return nextDoc;
        }));
    };
    CommunicationService.prototype.getProgress = function () {
        // return this.apollo
        //   .query({
        //     query: gql`
        //       {
        //         getProgress() {
        //           total,
        //           done
        //         }
        //       }
        //     `
        //   })
        //   .pipe(map((res: any) => res.data.getProgress));
        // Mock
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.mockProgress);
    };
    CommunicationService.prototype.getQuestionIds = function () {
        // return this.apollo
        //   .query({
        //     query: gql`
        //       {
        //         getQuestionIds
        //       }
        //     `
        //   })
        //   .pipe(map((res: any) => res.data));
        // Mock
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(['isMusic', 'isMovie', 'isEvent']);
    };
    CommunicationService.prototype.getAnswers = function () {
        // return of(['yes', 'maybe', 'no']);
        // return of(['1', '2', '3', '4', '5']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([
            'Trifft nicht zu',
            'Trifft eher nicht zu',
            'Weiß nicht',
            'Trifft eher zu',
            'Trifft zu'
        ]);
    };
    CommunicationService.prototype.saveAnswers = function (answers) {
        if (answers.length) {
            console.log('Sending to backend:', answers);
            return this.apollo.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          mutation saveDecision($decisions: [DecisionInput]!) {\n            saveDecision(decisions: $decisions)\n          }\n        "], ["\n          mutation saveDecision($decisions: [DecisionInput]!) {\n            saveDecision(decisions: $decisions)\n          }\n        "]))),
                variables: {
                    decisions: answers
                }
                // optimisticResponse: {
                //   data: {
                //     saveAnswers: true
                //   }
                // }
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
        // Mock
        //   if (answers.length) {
        //     console.log('Sending to backend:', answers);
        //     return of(true);
        //   } else {
        //     return of(false);
        //   }
    };
    CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], CommunicationService);
    return CommunicationService;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/index.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/index.js");






var uri = 'http://meslis-test-3.corp.deecoob.com:58192/graphql';
function createApollo(httpLink) {
    var http = httpLink.create({ uri: uri });
    var auth = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_5__["setContext"])(function (_) {
        // get the authentication token from local storage if it exists
        var token = localStorage.getItem('token');
        if (!token) {
            return {};
        }
        else {
            return {
                headers: {
                    Authorization: "Bearer " + token
                }
            };
        }
    });
    return {
        link: auth.concat(http),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
                }
            ]
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hilfe</h1>\n<mat-dialog-content>\n  <h3>Allgemein</h3>\n  <p>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit, eum\n    placeat delectus pariatur velit nostrum explicabo officia eos incidunt\n    doloribus non reprehenderit cum quidem alias quia, nam neque ex.\n  </p>\n\n  <h3>Musik</h3>\n  <p>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit, eum\n    placeat delectus pariatur velit nostrum explicabo officia eos incidunt\n    doloribus non reprehenderit cum quidem alias quia, nam neque ex.\n  </p>\n\n  <h3>Film</h3>\n  <p>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit, eum\n    placeat delectus pariatur velit nostrum explicabo officia eos incidunt\n    doloribus non reprehenderit cum quidem alias quia, nam neque ex.\n  </p>\n\n  <h3>Veranstaltung</h3>\n  <p>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit, eum\n    placeat delectus pariatur velit nostrum explicabo officia eos incidunt\n    doloribus non reprehenderit cum quidem alias quia, nam neque ex.\n  </p>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/labeling/labeling.component.html":
/*!**************************************************!*\
  !*** ./src/app/labeling/labeling.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <gl-question-room\n    [currentInstance]=\"currentInstance | async\"\n    [done]=\"(progress | async).done\"\n    [maxProgress]=\"(progress | async).total\"\n    [questions]=\"questions | async\"\n    [answers]=\"answers | async\"\n    [answerMode]=\"'stars'\"\n    [rewards]=\"rewards\"\n  ></gl-question-room>\n</div>\n"

/***/ }),

/***/ "./src/app/labeling/labeling.component.scss":
/*!**************************************************!*\
  !*** ./src/app/labeling/labeling.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiZWxpbmcvQzpcXFVzZXJzXFxkdWNhbmgudHJpbmhcXHByb2plY3RzXFxsYWJlbGNoZWNrZXIvc3JjXFxhcHBcXGxhYmVsaW5nXFxsYWJlbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2xhYmVsaW5nL2xhYmVsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/labeling/labeling.component.ts":
/*!************************************************!*\
  !*** ./src/app/labeling/labeling.component.ts ***!
  \************************************************/
/*! exports provided: LabelingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelingComponent", function() { return LabelingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var gamifilearning_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gamifilearning-lib */ "./dist/gamifilearning-lib/fesm5/gamifilearning-lib.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _communication_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communication/communication.service */ "./src/app/communication/communication.service.ts");
/* harmony import */ var _rewards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rewards */ "./src/app/labeling/rewards.ts");






var LabelingComponent = /** @class */ (function () {
    function LabelingComponent(communication, question) {
        this.communication = communication;
        this.question = question;
        this.rewards = _rewards__WEBPACK_IMPORTED_MODULE_5__["REWARDS"];
    }
    LabelingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentInstance = this.communication.currentDocument$;
        this.questions = this.communication.getQuestionIds();
        this.progress = this.communication.getProgress();
        this.answers = this.communication.getAnswers();
        this.question.answers$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (answers) { return _this.communication.saveAnswers(answers); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (_) { return _this.communication.getNextDocument(); }))
            .subscribe();
    };
    LabelingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labeling',
            template: __webpack_require__(/*! ./labeling.component.html */ "./src/app/labeling/labeling.component.html"),
            styles: [__webpack_require__(/*! ./labeling.component.scss */ "./src/app/labeling/labeling.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communication_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"],
            gamifilearning_lib__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], LabelingComponent);
    return LabelingComponent;
}());



/***/ }),

/***/ "./src/app/labeling/rewards.ts":
/*!*************************************!*\
  !*** ./src/app/labeling/rewards.ts ***!
  \*************************************/
/*! exports provided: REWARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REWARDS", function() { return REWARDS; });
var REWARDS = [];
for (var x = 5; x < 75; x = x + 5) {
    REWARDS.push({ position: (x * 100) / 75, unlocked: false, total: x });
}


/***/ }),

/***/ "./src/app/logged-out/logged-out.component.html":
/*!******************************************************!*\
  !*** ./src/app/logged-out/logged-out.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Logged out succesfully!</p>\n<button mat-button routerLink=\"/login\">Log in again</button>\n"

/***/ }),

/***/ "./src/app/logged-out/logged-out.component.scss":
/*!******************************************************!*\
  !*** ./src/app/logged-out/logged-out.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZC1vdXQvbG9nZ2VkLW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/logged-out/logged-out.component.ts":
/*!****************************************************!*\
  !*** ./src/app/logged-out/logged-out.component.ts ***!
  \****************************************************/
/*! exports provided: LoggedOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedOutComponent", function() { return LoggedOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoggedOutComponent = /** @class */ (function () {
    function LoggedOutComponent() {
    }
    LoggedOutComponent.prototype.ngOnInit = function () {
    };
    LoggedOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logged-out',
            template: __webpack_require__(/*! ./logged-out.component.html */ "./src/app/logged-out/logged-out.component.html"),
            styles: [__webpack_require__(/*! ./logged-out.component.scss */ "./src/app/logged-out/logged-out.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggedOutComponent);
    return LoggedOutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-card\">\n  <mat-card-header> <mat-card-title>Login</mat-card-title> </mat-card-header>\n  <mat-card-content>\n    <form>\n      <mat-form-field class=\"full-width\">\n        <input\n          matInput\n          placeholder=\"Username\"\n          [(ngModel)]=\"username\"\n          name=\"username\"\n          required\n        />\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input\n          matInput\n          placeholder=\"Password\"\n          [(ngModel)]=\"password\"\n          type=\"password\"\n          name=\"password\"\n          required\n        />\n      </mat-form-field>\n    </form>\n\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 400px; }\n\n.full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxkdWNhbmgudHJpbmhcXHByb2plY3RzXFxsYWJlbGNoZWNrZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBRWhCLGFBQVksRUFDYjs7QUFFRDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNhcmQge1xyXG4gIC8vICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLy8gICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: MESLISPW, MESLISUSER, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESLISPW", function() { return MESLISPW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESLISUSER", function() { return MESLISUSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var MESLISPW = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
var MESLISUSER = 'test';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.showSpinner = false;
        this.username = MESLISUSER;
        this.password = MESLISPW;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showSpinner = true;
        this.auth.login(this.username, this.password).subscribe(function (res) {
            _this.showSpinner = false;
            _this.router.navigate(['/labeling']);
        }, function (err) {
            _this.showSpinner = false;
            _this.password = '';
            console.log('err');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"spacer\"></span>\n  <button (click)=\"openHelpPage()\" class=\"toolbar-item\" mat-icon-button>\n    <mat-icon>help</mat-icon>\n  </button>\n  <div *ngIf=\"auth.isLogged(); else notLogged\">\n    <!-- <gl-score-display></gl-score-display> -->\n    <button [matMenuTriggerFor]=\"menu\" class=\"toolbar-item\" mat-icon-button>\n      <mat-icon>person</mat-icon>\n    </button>\n  </div>\n\n  <ng-template #notLogged>\n    <button mat-button routerLink=\"/login\">Login</button>\n  </ng-template>\n</mat-toolbar>\n<mat-menu #menu=\"matMenu\">\n  <!-- <button mat-menu-item disabled>Kontostand</button> -->\n  <button mat-menu-item disabled>Errungenschaften</button>\n  <button mat-menu-item (click)=\"logout()\">Logout</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto; }\n\n.toolbar-item {\n  margin: 0 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcZHVjYW5oLnRyaW5oXFxwcm9qZWN0c1xcbGFiZWxjaGVja2VyL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4udG9vbGJhci1pdGVtIHtcclxuICBtYXJnaW46IDAgNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, dialog) {
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isLogged()) {
            setTimeout(function () { return _this.openHelpPage(); });
        }
    };
    NavbarComponent.prototype.openHelpPage = function () {
        this.dialog.open(_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], {
            height: '80%',
            width: '80%'
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['loggedOut']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ducanh.trinh\projects\labelchecker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map