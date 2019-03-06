/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
var GIPHY_API_KEY = 'n8VZGDtSpax8HM6j486SScMj5vMcavN2';
/** @type {?} */
var GIPHY_URL = 'https://api.giphy.com/v1/gifs/search';
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
        return this.http.get("https://numbersapi.p.rapidapi.com/" + (date.getMonth() +
            1) + "/" + date.getDate() + "/date", 
        // 'https://cors.io/?https://randomuselessfact.appspot.com/random.txt?language=de',
        {
            responseType: 'text',
            headers: {
                'X-RapidAPI-Key': '9817e98542msh661374e436e8e58p1d692ejsn7e0c852d8acc'
            }
        }
        // 'https://cat-fact.herokuapp.com/facts/random', {
        // }
        );
        // .pipe(map((res: any) => res.fact));
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
                limit: '20',
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
    /** @nocollapse */ GamificationService.ngInjectableDef = i0.defineInjectable({ factory: function GamificationService_Factory() { return new GamificationService(i0.inject(i1.HttpClient)); }, token: GamificationService, providedIn: "root" });
    return GamificationService;
}());
export { GamificationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GamificationService.prototype.score;
    /** @type {?} */
    GamificationService.prototype.score$;
    /**
     * @type {?}
     * @private
     */
    GamificationService.prototype.progress;
    /** @type {?} */
    GamificationService.prototype.progress$;
    /**
     * @type {?}
     * @private
     */
    GamificationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtaWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUFFL0IsYUFBYSxHQUFHLGtDQUFrQzs7SUFDbEQsU0FBUyxHQUFHLHNDQUFzQztBQUV4RDtJQVVFLDZCQUFvQixJQUFnQjtRQUFwQyxpQkFFQztRQUZtQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTjVCLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUzQixhQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsTUFBYztRQUE1QixpQkFHQztRQUZDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUN4RSxnRUFBZ0U7SUFDbEUsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsSUFBdUI7UUFBdkIscUJBQUEsRUFBQSxXQUFpQixJQUFJLEVBQUU7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsd0NBQXFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEQsQ0FBQyxVQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBTztRQUM1QixtRkFBbUY7UUFDbkY7WUFDRSxZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCLEVBQUUsb0RBQW9EO2FBQ3ZFO1NBQ0Y7UUFDRCxtREFBbUQ7UUFFbkQsSUFBSTtTQUNMLENBQUM7UUFDRixzQ0FBc0M7SUFDeEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsS0FBYTtRQUExQixpQkFjQztRQWJDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxDQUFDLEVBQUUsS0FBSzthQUNUO1NBQ0YsQ0FBQzthQUNELElBQUk7UUFDSCw4Q0FBOEM7UUFDOUMsR0FBRyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUNuRCxDQUFDO0lBQ04sQ0FBQztJQUVELHlEQUF5RDs7Ozs7O0lBQ2pELHdDQUFVOzs7Ozs7SUFBbEI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQXVCOzs7Ozs7O0lBQ2YsNkNBQWU7Ozs7Ozs7SUFBdkIsVUFBd0IsTUFBYztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCw4REFBOEQ7Ozs7Ozs7O0lBQ3RELDhDQUFnQjs7Ozs7OztJQUF4QixVQUE0QixLQUFVO1FBQ3BDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQWxFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLFVBQVU7Ozs4QkFGbkI7Q0EyRUMsQUFuRUQsSUFtRUM7U0FoRVksbUJBQW1COzs7Ozs7SUFDOUIsb0NBQXVDOztJQUN2QyxxQ0FBbUM7Ozs7O0lBRW5DLHVDQUEwQzs7SUFDMUMsd0NBQXlDOzs7OztJQUU3QixtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgR0lQSFlfQVBJX0tFWSA9ICduOFZaR0R0U3BheDhITTZqNDg2U1NjTWo1dk1jYXZOMic7XHJcbmNvbnN0IEdJUEhZX1VSTCA9ICdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2gnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FtaWZpY2F0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzY29yZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XHJcbiAgc2NvcmUkID0gdGhpcy5zY29yZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBwcm9ncmVzcyA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XHJcbiAgcHJvZ3Jlc3MkID0gdGhpcy5wcm9ncmVzcy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB0aGlzLmZldGNoU2NvcmUoKS5zdWJzY3JpYmUoc2NvcmUgPT4gdGhpcy5zY29yZS5uZXh0KHNjb3JlKSk7XHJcbiAgfVxyXG5cclxuICBpbmNyZWFzZVNjb3JlKHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmRvSW5jcmVhc2VTY29yZSh3ZWlnaHQpLnN1YnNjcmliZShzY29yZSA9PiB0aGlzLnNjb3JlLm5leHQoc2NvcmUpKTtcclxuICAgIC8vIHRoaXMuc2NvcmUubmV4dCh0aGlzLnNjb3JlLnZhbHVlICsgTWF0aC5mbG9vcih3ZWlnaHQgKiAxMDApKTtcclxuICB9XHJcblxyXG4gIGdldFRyaXZpYShkYXRlOiBEYXRlID0gbmV3IERhdGUoKSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgIGBodHRwczovL251bWJlcnNhcGkucC5yYXBpZGFwaS5jb20vJHtkYXRlLmdldE1vbnRoKCkgK1xyXG4gICAgICAgIDF9LyR7ZGF0ZS5nZXREYXRlKCl9L2RhdGVgLFxyXG4gICAgICAvLyAnaHR0cHM6Ly9jb3JzLmlvLz9odHRwczovL3JhbmRvbXVzZWxlc3NmYWN0LmFwcHNwb3QuY29tL3JhbmRvbS50eHQ/bGFuZ3VhZ2U9ZGUnLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJzk4MTdlOTg1NDJtc2g2NjEzNzRlNDM2ZThlNThwMWQ2OTJlanNuN2UwYzg1MmQ4YWNjJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyAnaHR0cHM6Ly9jYXQtZmFjdC5oZXJva3VhcHAuY29tL2ZhY3RzL3JhbmRvbScsIHtcclxuXHJcbiAgICAgIC8vIH1cclxuICAgICk7XHJcbiAgICAvLyAucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMuZmFjdCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tR2lmKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChHSVBIWV9VUkwsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGFwaV9rZXk6IEdJUEhZX0FQSV9LRVksXHJcbiAgICAgICAgICBsaW1pdDogJzIwJyxcclxuICAgICAgICAgIHJhdGluZzogJ2cnLFxyXG4gICAgICAgICAgcTogcXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIC8vIGNob3NlIGEgcmFuZG9tIGdpZiBvdXQgb2YgdGhlIGFycmF5IG9mIGdpZnNcclxuICAgICAgICBtYXAoKGdpZjogYW55KSA9PiB0aGlzLmdldFJhbmRvbUVsZW1lbnQoZ2lmLmRhdGEpKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gY3VycmVudGx5IG1vY2tlZC4gU2hvdWxkIGJlIHBlcnNpc3RlZCBpbiBiYWNrZW5kIGxhdGVyXHJcbiAgcHJpdmF0ZSBmZXRjaFNjb3JlKCkge1xyXG4gICAgcmV0dXJuIG9mKDUwMCk7XHJcbiAgfVxyXG5cclxuICAvLyBjdXJyZW50bHkgbW9ja2VkIHRvb1xyXG4gIHByaXZhdGUgZG9JbmNyZWFzZVNjb3JlKHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5zY29yZS52YWx1ZSArIE1hdGguZmxvb3Iod2VpZ2h0ICogMTAwKSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGVscGVyIGZ1bmN0aW9uIHRvIGNob3NlIGEgcmFuZG9tIGVsZW1lbnQgZnJvbSBhbiBhcnJheSAqL1xyXG4gIHByaXZhdGUgZ2V0UmFuZG9tRWxlbWVudDxUPihhcnJheTogVFtdKTogVCB7XHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbiAgfVxyXG59XHJcbiJdfQ==