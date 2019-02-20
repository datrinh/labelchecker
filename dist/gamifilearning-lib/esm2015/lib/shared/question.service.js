/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NUMBER_OF_TEXTS, UNLABELED_INDEX, ENTROPY_INDEX } from '../config.js';
import * as i0 from "@angular/core";
export class QuestionService {
    constructor() {
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
    getUnlabeledInstances(data = this.data) {
        return data.filter(feature => feature.features[1][UNLABELED_INDEX] != null);
    }
    /**
     * Return top scoring data objects
     * @param {?} data corresponding data set
     * @param {?=} number number of instances to return
     * @return {?}
     */
    getTopInstances(data, number = NUMBER_OF_TEXTS) {
        /** @type {?} */
        const unlabeled = this.getUnlabeledInstances(data);
        return unlabeled
            .sort((a, b) => {
            if (a.features[1][ENTROPY_INDEX] < b.features[1][ENTROPY_INDEX]) {
                return 1;
            }
            else {
                return -1;
            }
        })
            .slice(0, number);
    }
    /**
     * @param {?} answers
     * @return {?}
     */
    handleSubmittedAnswers(answers) {
        this.answers.next(answers);
    }
}
QuestionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
QuestionService.ctorParameters = () => [];
/** @nocollapse */ QuestionService.ngInjectableDef = i0.defineInjectable({ factory: function QuestionService_Factory() { return new QuestionService(); }, token: QuestionService, providedIn: "root" });
if (false) {
    /** @type {?} */
    QuestionService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    QuestionService.prototype.currentInstance;
    /** @type {?} */
    QuestionService.prototype.currentInstance$;
    /**
     * @type {?}
     * @private
     */
    QuestionService.prototype.answers;
    /** @type {?} */
    QuestionService.prototype.answers$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcXVlc3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFLL0UsTUFBTSxPQUFPLGVBQWU7SUFTMUI7UUFSQSxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUVqQixvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsQ0FBQztRQUNyRSxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9DLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwRCxhQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUdyQyw2QkFBNkI7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxPQUFzQixJQUFJLENBQUMsSUFBSTtRQUNuRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7Ozs7SUFPRCxlQUFlLENBQ2IsSUFBbUIsRUFDbkIsU0FBaUIsZUFBZTs7Y0FFMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFDbEQsT0FBTyxTQUFTO2FBQ2IsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQy9ELE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLE9BQWlCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQTNDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFFQywrQkFBeUI7Ozs7O0lBRXpCLDBDQUFxRTs7SUFDckUsMkNBQXVEOzs7OztJQUV2RCxrQ0FBb0Q7O0lBQ3BELG1DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEpzb25GZWF0dXJlLCBCYWNrZW5kUmVzcG9uc2UsIEFuc3dlciB9IGZyb20gJy4vZGF0YS5pbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgeyBOVU1CRVJfT0ZfVEVYVFMsIFVOTEFCRUxFRF9JTkRFWCwgRU5UUk9QWV9JTkRFWCB9IGZyb20gJy4uL2NvbmZpZy5qcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblNlcnZpY2Uge1xyXG4gIGRhdGE6IEpzb25GZWF0dXJlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SW5zdGFuY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJhY2tlbmRSZXNwb25zZT4obnVsbCk7XHJcbiAgY3VycmVudEluc3RhbmNlJCA9IHRoaXMuY3VycmVudEluc3RhbmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGFuc3dlcnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFuc3dlcltdPihbXSk7XHJcbiAgYW5zd2VycyQgPSB0aGlzLmFuc3dlcnMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC8qKiBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlKi8pIHtcclxuICAgIC8vIHRoaXMudXBkYXRlTmV4dEluc3RhbmNlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRVbmxhYmVsZWRJbnN0YW5jZXMoZGF0YTogSnNvbkZlYXR1cmVbXSA9IHRoaXMuZGF0YSk6IEpzb25GZWF0dXJlW10ge1xyXG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKGZlYXR1cmUgPT4gZmVhdHVyZS5mZWF0dXJlc1sxXVtVTkxBQkVMRURfSU5ERVhdICE9IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRvcCBzY29yaW5nIGRhdGEgb2JqZWN0c1xyXG4gICAqIEBwYXJhbSBkYXRhIGNvcnJlc3BvbmRpbmcgZGF0YSBzZXRcclxuICAgKiBAcGFyYW0gbnVtYmVyIG51bWJlciBvZiBpbnN0YW5jZXMgdG8gcmV0dXJuXHJcbiAgICovXHJcbiAgZ2V0VG9wSW5zdGFuY2VzKFxyXG4gICAgZGF0YTogSnNvbkZlYXR1cmVbXSxcclxuICAgIG51bWJlcjogbnVtYmVyID0gTlVNQkVSX09GX1RFWFRTXHJcbiAgKTogSnNvbkZlYXR1cmVbXSB7XHJcbiAgICBjb25zdCB1bmxhYmVsZWQgPSB0aGlzLmdldFVubGFiZWxlZEluc3RhbmNlcyhkYXRhKTtcclxuICAgIHJldHVybiB1bmxhYmVsZWRcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5mZWF0dXJlc1sxXVtFTlRST1BZX0lOREVYXSA8IGIuZmVhdHVyZXNbMV1bRU5UUk9QWV9JTkRFWF0pIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuc2xpY2UoMCwgbnVtYmVyKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdHRlZEFuc3dlcnMoYW5zd2VyczogQW5zd2VyW10pIHtcclxuICAgIHRoaXMuYW5zd2Vycy5uZXh0KGFuc3dlcnMpO1xyXG4gIH1cclxufVxyXG4iXX0=