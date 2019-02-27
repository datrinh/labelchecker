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
        return this.http.get(
        // `http://numbersapi.com/${date.getMonth() + 1}/${date.getDate()}/date`,
        'https://randomuselessfact.appspot.com/random.txt?language=de', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtaWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2dhbWlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7TUFFL0IsYUFBYSxHQUFHLGtDQUFrQzs7TUFDbEQsU0FBUyxHQUFHLHNDQUFzQztBQUt4RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTzlCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFONUIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFjO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxnRUFBZ0U7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBYSxJQUFJLElBQUksRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztRQUNsQix5RUFBeUU7UUFDekUsOERBQThELEVBQzlEO1lBQ0UsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNkLE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsQ0FBQyxFQUFFLEtBQUs7YUFDVDtTQUNGLENBQUM7YUFDRCxJQUFJO1FBQ0gsOENBQThDO1FBQzlDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNuRCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBR08sVUFBVTtRQUNoQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBR08sZUFBZSxDQUFDLE1BQWM7UUFDcEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7OztJQUdPLGdCQUFnQixDQUFJLEtBQVU7UUFDcEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBMURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFVBQVU7Ozs7Ozs7O0lBVWpCLG9DQUF1Qzs7SUFDdkMscUNBQW1DOzs7OztJQUVuQyx1Q0FBMEM7O0lBQzFDLHdDQUF5Qzs7Ozs7SUFFN0IsbUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0IEdJUEhZX0FQSV9LRVkgPSAnbjhWWkdEdFNwYXg4SE02ajQ4NlNTY01qNXZNY2F2TjInO1xyXG5jb25zdCBHSVBIWV9VUkwgPSAnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbWlmaWNhdGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc2NvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gIHNjb3JlJCA9IHRoaXMuc2NvcmUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgcHJvZ3Jlc3MgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gIHByb2dyZXNzJCA9IHRoaXMucHJvZ3Jlc3MuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgdGhpcy5mZXRjaFNjb3JlKCkuc3Vic2NyaWJlKHNjb3JlID0+IHRoaXMuc2NvcmUubmV4dChzY29yZSkpO1xyXG4gIH1cclxuXHJcbiAgaW5jcmVhc2VTY29yZSh3ZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5kb0luY3JlYXNlU2NvcmUod2VpZ2h0KS5zdWJzY3JpYmUoc2NvcmUgPT4gdGhpcy5zY29yZS5uZXh0KHNjb3JlKSk7XHJcbiAgICAvLyB0aGlzLnNjb3JlLm5leHQodGhpcy5zY29yZS52YWx1ZSArIE1hdGguZmxvb3Iod2VpZ2h0ICogMTAwKSk7XHJcbiAgfVxyXG5cclxuICBnZXRUcml2aWEoZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAvLyBgaHR0cDovL251bWJlcnNhcGkuY29tLyR7ZGF0ZS5nZXRNb250aCgpICsgMX0vJHtkYXRlLmdldERhdGUoKX0vZGF0ZWAsXHJcbiAgICAgICdodHRwczovL3JhbmRvbXVzZWxlc3NmYWN0LmFwcHNwb3QuY29tL3JhbmRvbS50eHQ/bGFuZ3VhZ2U9ZGUnLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCdcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUdpZihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoR0lQSFlfVVJMLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBhcGlfa2V5OiBHSVBIWV9BUElfS0VZLFxyXG4gICAgICAgICAgbGltaXQ6ICcyMCcsXHJcbiAgICAgICAgICByYXRpbmc6ICdnJyxcclxuICAgICAgICAgIHE6IHF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICAvLyBjaG9zZSBhIHJhbmRvbSBnaWYgb3V0IG9mIHRoZSBhcnJheSBvZiBnaWZzXHJcbiAgICAgICAgbWFwKChnaWY6IGFueSkgPT4gdGhpcy5nZXRSYW5kb21FbGVtZW50KGdpZi5kYXRhKSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGN1cnJlbnRseSBtb2NrZWQuIFNob3VsZCBiZSBwZXJzaXN0ZWQgaW4gYmFja2VuZCBsYXRlclxyXG4gIHByaXZhdGUgZmV0Y2hTY29yZSgpIHtcclxuICAgIHJldHVybiBvZig1MDApO1xyXG4gIH1cclxuXHJcbiAgLy8gY3VycmVudGx5IG1vY2tlZCB0b29cclxuICBwcml2YXRlIGRvSW5jcmVhc2VTY29yZSh3ZWlnaHQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG9mKHRoaXMuc2NvcmUudmFsdWUgKyBNYXRoLmZsb29yKHdlaWdodCAqIDEwMCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhlbHBlciBmdW5jdGlvbiB0byBjaG9zZSBhIHJhbmRvbSBlbGVtZW50IGZyb20gYW4gYXJyYXkgKi9cclxuICBwcml2YXRlIGdldFJhbmRvbUVsZW1lbnQ8VD4oYXJyYXk6IFRbXSk6IFQge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xyXG4gIH1cclxufVxyXG4iXX0=