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
const GIPHY_API_KEY = 'n8VZGDtSpax8HM6j486SScMj5vMcavN2';
/** @type {?} */
const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search';
export class GamificationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.score = new BehaviorSubject(0);
        this.score$ = this.score.asObservable();
        this.progress = new BehaviorSubject(0);
        this.progress$ = this.progress.asObservable();
        this.fetchScore().subscribe(score => this.score.next(score));
    }
    /**
     * @param {?} weight
     * @return {?}
     */
    increaseScore(weight) {
        this.doIncreaseScore(weight).subscribe(score => this.score.next(score));
        // this.score.next(this.score.value + Math.floor(weight * 100));
    }
    /**
     * @param {?=} date
     * @return {?}
     */
    getTrivia(date = new Date()) {
        return this.http.get(`https://numbersapi.p.rapidapi.com/${date.getMonth() +
            1}/${date.getDate()}/date`, 
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
    }
    /**
     * @param {?} query
     * @return {?}
     */
    getRandomGif(query) {
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
        map((gif) => this.getRandomElement(gif.data)));
    }
    // currently mocked. Should be persisted in backend later
    /**
     * @private
     * @return {?}
     */
    fetchScore() {
        return of(500);
    }
    // currently mocked too
    /**
     * @private
     * @param {?} weight
     * @return {?}
     */
    doIncreaseScore(weight) {
        return of(this.score.value + Math.floor(weight * 100));
    }
    /**
     * Helper function to chose a random element from an array
     * @private
     * @template T
     * @param {?} array
     * @return {?}
     */
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
GamificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GamificationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ GamificationService.ngInjectableDef = i0.defineInjectable({ factory: function GamificationService_Factory() { return new GamificationService(i0.inject(i1.HttpClient)); }, token: GamificationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtaWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7TUFFL0IsYUFBYSxHQUFHLGtDQUFrQzs7TUFDbEQsU0FBUyxHQUFHLHNDQUFzQztBQUt4RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTzlCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFONUIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFjO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxnRUFBZ0U7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBYSxJQUFJLElBQUksRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixxQ0FBcUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsRCxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPO1FBQzVCLG1GQUFtRjtRQUNuRjtZQUNFLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0IsRUFBRSxvREFBb0Q7YUFDdkU7U0FDRjtRQUNELG1EQUFtRDtRQUVuRCxJQUFJO1NBQ0wsQ0FBQztRQUNGLHNDQUFzQztJQUN4QyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxDQUFDLEVBQUUsS0FBSzthQUNUO1NBQ0YsQ0FBQzthQUNELElBQUk7UUFDSCw4Q0FBOEM7UUFDOUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ25ELENBQUM7SUFDTixDQUFDOzs7Ozs7SUFHTyxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFHTyxlQUFlLENBQUMsTUFBYztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7Ozs7O0lBR08sZ0JBQWdCLENBQUksS0FBVTtRQUNwQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFsRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsVUFBVTs7Ozs7Ozs7SUFVakIsb0NBQXVDOztJQUN2QyxxQ0FBbUM7Ozs7O0lBRW5DLHVDQUEwQzs7SUFDMUMsd0NBQXlDOzs7OztJQUU3QixtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgR0lQSFlfQVBJX0tFWSA9ICduOFZaR0R0U3BheDhITTZqNDg2U1NjTWo1dk1jYXZOMic7XHJcbmNvbnN0IEdJUEhZX1VSTCA9ICdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2gnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FtaWZpY2F0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzY29yZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XHJcbiAgc2NvcmUkID0gdGhpcy5zY29yZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBwcm9ncmVzcyA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XHJcbiAgcHJvZ3Jlc3MkID0gdGhpcy5wcm9ncmVzcy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB0aGlzLmZldGNoU2NvcmUoKS5zdWJzY3JpYmUoc2NvcmUgPT4gdGhpcy5zY29yZS5uZXh0KHNjb3JlKSk7XHJcbiAgfVxyXG5cclxuICBpbmNyZWFzZVNjb3JlKHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmRvSW5jcmVhc2VTY29yZSh3ZWlnaHQpLnN1YnNjcmliZShzY29yZSA9PiB0aGlzLnNjb3JlLm5leHQoc2NvcmUpKTtcclxuICAgIC8vIHRoaXMuc2NvcmUubmV4dCh0aGlzLnNjb3JlLnZhbHVlICsgTWF0aC5mbG9vcih3ZWlnaHQgKiAxMDApKTtcclxuICB9XHJcblxyXG4gIGdldFRyaXZpYShkYXRlOiBEYXRlID0gbmV3IERhdGUoKSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgIGBodHRwczovL251bWJlcnNhcGkucC5yYXBpZGFwaS5jb20vJHtkYXRlLmdldE1vbnRoKCkgK1xyXG4gICAgICAgIDF9LyR7ZGF0ZS5nZXREYXRlKCl9L2RhdGVgLFxyXG4gICAgICAvLyAnaHR0cHM6Ly9jb3JzLmlvLz9odHRwczovL3JhbmRvbXVzZWxlc3NmYWN0LmFwcHNwb3QuY29tL3JhbmRvbS50eHQ/bGFuZ3VhZ2U9ZGUnLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJzk4MTdlOTg1NDJtc2g2NjEzNzRlNDM2ZThlNThwMWQ2OTJlanNuN2UwYzg1MmQ4YWNjJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyAnaHR0cHM6Ly9jYXQtZmFjdC5oZXJva3VhcHAuY29tL2ZhY3RzL3JhbmRvbScsIHtcclxuXHJcbiAgICAgIC8vIH1cclxuICAgICk7XHJcbiAgICAvLyAucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMuZmFjdCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tR2lmKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChHSVBIWV9VUkwsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGFwaV9rZXk6IEdJUEhZX0FQSV9LRVksXHJcbiAgICAgICAgICBsaW1pdDogJzIwJyxcclxuICAgICAgICAgIHJhdGluZzogJ2cnLFxyXG4gICAgICAgICAgcTogcXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIC8vIGNob3NlIGEgcmFuZG9tIGdpZiBvdXQgb2YgdGhlIGFycmF5IG9mIGdpZnNcclxuICAgICAgICBtYXAoKGdpZjogYW55KSA9PiB0aGlzLmdldFJhbmRvbUVsZW1lbnQoZ2lmLmRhdGEpKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gY3VycmVudGx5IG1vY2tlZC4gU2hvdWxkIGJlIHBlcnNpc3RlZCBpbiBiYWNrZW5kIGxhdGVyXHJcbiAgcHJpdmF0ZSBmZXRjaFNjb3JlKCkge1xyXG4gICAgcmV0dXJuIG9mKDUwMCk7XHJcbiAgfVxyXG5cclxuICAvLyBjdXJyZW50bHkgbW9ja2VkIHRvb1xyXG4gIHByaXZhdGUgZG9JbmNyZWFzZVNjb3JlKHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5zY29yZS52YWx1ZSArIE1hdGguZmxvb3Iod2VpZ2h0ICogMTAwKSk7XHJcbiAgfVxyXG5cclxuICAvKiogSGVscGVyIGZ1bmN0aW9uIHRvIGNob3NlIGEgcmFuZG9tIGVsZW1lbnQgZnJvbSBhbiBhcnJheSAqL1xyXG4gIHByaXZhdGUgZ2V0UmFuZG9tRWxlbWVudDxUPihhcnJheTogVFtdKTogVCB7XHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbiAgfVxyXG59XHJcbiJdfQ==