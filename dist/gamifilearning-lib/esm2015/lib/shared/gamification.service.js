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
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search';
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
        return this.http.get(`http://numbersapi.com/${date.getMonth() + 1}/${date.getDate()}/date`, {
            responseType: 'text'
        });
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
                limit: '50',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtaWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7TUFFL0IsYUFBYSxHQUFHLGtDQUFrQzs7TUFDbEQsU0FBUyxHQUFHLHFDQUFxQztBQUt2RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTzlCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFONUIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFjO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxnRUFBZ0U7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBYSxJQUFJLElBQUksRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQix5QkFBeUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFDckU7WUFDRSxZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxDQUFDLEVBQUUsS0FBSzthQUNUO1NBQ0YsQ0FBQzthQUNELElBQUk7UUFDSCw4Q0FBOEM7UUFDOUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ25ELENBQUM7SUFDTixDQUFDOzs7Ozs7SUFHTyxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFHTyxlQUFlLENBQUMsTUFBYztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7Ozs7O0lBR08sZ0JBQWdCLENBQUksS0FBVTtRQUNwQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUF6REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsVUFBVTs7Ozs7Ozs7SUFVakIsb0NBQXVDOztJQUN2QyxxQ0FBbUM7Ozs7O0lBRW5DLHVDQUEwQzs7SUFDMUMsd0NBQXlDOzs7OztJQUU3QixtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgR0lQSFlfQVBJX0tFWSA9ICduOFZaR0R0U3BheDhITTZqNDg2U1NjTWo1dk1jYXZOMic7XHJcbmNvbnN0IEdJUEhZX1VSTCA9ICdodHRwOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYW1pZmljYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIHNjb3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcclxuICBzY29yZSQgPSB0aGlzLnNjb3JlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIHByb2dyZXNzID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcclxuICBwcm9ncmVzcyQgPSB0aGlzLnByb2dyZXNzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHRoaXMuZmV0Y2hTY29yZSgpLnN1YnNjcmliZShzY29yZSA9PiB0aGlzLnNjb3JlLm5leHQoc2NvcmUpKTtcclxuICB9XHJcblxyXG4gIGluY3JlYXNlU2NvcmUod2VpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZG9JbmNyZWFzZVNjb3JlKHdlaWdodCkuc3Vic2NyaWJlKHNjb3JlID0+IHRoaXMuc2NvcmUubmV4dChzY29yZSkpO1xyXG4gICAgLy8gdGhpcy5zY29yZS5uZXh0KHRoaXMuc2NvcmUudmFsdWUgKyBNYXRoLmZsb29yKHdlaWdodCAqIDEwMCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJpdmlhKGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgYGh0dHA6Ly9udW1iZXJzYXBpLmNvbS8ke2RhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZGF0ZS5nZXREYXRlKCl9L2RhdGVgLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUdpZihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoR0lQSFlfVVJMLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBhcGlfa2V5OiBHSVBIWV9BUElfS0VZLFxyXG4gICAgICAgICAgbGltaXQ6ICc1MCcsXHJcbiAgICAgICAgICByYXRpbmc6ICdnJyxcclxuICAgICAgICAgIHE6IHF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICAvLyBjaG9zZSBhIHJhbmRvbSBnaWYgb3V0IG9mIHRoZSBhcnJheSBvZiBnaWZzXHJcbiAgICAgICAgbWFwKChnaWY6IGFueSkgPT4gdGhpcy5nZXRSYW5kb21FbGVtZW50KGdpZi5kYXRhKSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGN1cnJlbnRseSBtb2NrZWQuIFNob3VsZCBiZSBwZXJzaXN0ZWQgaW4gYmFja2VuZCBsYXRlclxyXG4gIHByaXZhdGUgZmV0Y2hTY29yZSgpIHtcclxuICAgIHJldHVybiBvZig1MDApO1xyXG4gIH1cclxuXHJcbiAgLy8gY3VycmVudGx5IG1vY2tlZCB0b29cclxuICBwcml2YXRlIGRvSW5jcmVhc2VTY29yZSh3ZWlnaHQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuc2NvcmUudmFsdWUgKyBNYXRoLmZsb29yKHdlaWdodCAqIDEwMCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhlbHBlciBmdW5jdGlvbiB0byBjaG9zZSBhIHJhbmRvbSBlbGVtZW50IGZyb20gYW4gYXJyYXkgKi9cclxuICBwcml2YXRlIGdldFJhbmRvbUVsZW1lbnQ8VD4oYXJyYXk6IFRbXSk6IFQge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xyXG4gIH1cclxufVxyXG4iXX0=