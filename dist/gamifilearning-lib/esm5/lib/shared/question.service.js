/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NUMBER_OF_TEXTS, UNLABELED_INDEX, ENTROPY_INDEX } from '../config.js';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ QuestionService.ngInjectableDef = i0.defineInjectable({ factory: function QuestionService_Factory() { return new QuestionService(); }, token: QuestionService, providedIn: "root" });
    return QuestionService;
}());
export { QuestionService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcXVlc3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFL0U7SUFZRTtRQVJBLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxDQUFDO1FBQ3JFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0MsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELGFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3JDLDZCQUE2QjtJQUMvQixDQUFDOzs7OztJQUVELCtDQUFxQjs7OztJQUFyQixVQUFzQixJQUErQjtRQUEvQixxQkFBQSxFQUFBLE9BQXNCLElBQUksQ0FBQyxJQUFJO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx5Q0FBZTs7Ozs7O0lBQWYsVUFDRSxJQUFtQixFQUNuQixNQUFnQztRQUFoQyx1QkFBQSxFQUFBLHdCQUFnQzs7WUFFMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFDbEQsT0FBTyxTQUFTO2FBQ2IsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDL0QsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZ0RBQXNCOzs7O0lBQXRCLFVBQXVCLE9BQWlCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTNDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQkFQRDtDQWlEQyxBQTVDRCxJQTRDQztTQXpDWSxlQUFlOzs7SUFDMUIsK0JBQXlCOzs7OztJQUV6QiwwQ0FBcUU7O0lBQ3JFLDJDQUF1RDs7Ozs7SUFFdkQsa0NBQW9EOztJQUNwRCxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBKc29uRmVhdHVyZSwgQmFja2VuZFJlc3BvbnNlLCBBbnN3ZXIgfSBmcm9tICcuL2RhdGEuaW50ZXJmYWNlLmpzJztcclxuaW1wb3J0IHsgTlVNQkVSX09GX1RFWFRTLCBVTkxBQkVMRURfSU5ERVgsIEVOVFJPUFlfSU5ERVggfSBmcm9tICcuLi9jb25maWcuanMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25TZXJ2aWNlIHtcclxuICBkYXRhOiBKc29uRmVhdHVyZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY3VycmVudEluc3RhbmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCYWNrZW5kUmVzcG9uc2U+KG51bGwpO1xyXG4gIGN1cnJlbnRJbnN0YW5jZSQgPSB0aGlzLmN1cnJlbnRJbnN0YW5jZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBhbnN3ZXJzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBbnN3ZXJbXT4oW10pO1xyXG4gIGFuc3dlcnMkID0gdGhpcy5hbnN3ZXJzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigvKiogcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSovKSB7XHJcbiAgICAvLyB0aGlzLnVwZGF0ZU5leHRJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5sYWJlbGVkSW5zdGFuY2VzKGRhdGE6IEpzb25GZWF0dXJlW10gPSB0aGlzLmRhdGEpOiBKc29uRmVhdHVyZVtdIHtcclxuICAgIHJldHVybiBkYXRhLmZpbHRlcihmZWF0dXJlID0+IGZlYXR1cmUuZmVhdHVyZXNbMV1bVU5MQUJFTEVEX0lOREVYXSAhPSBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0b3Agc2NvcmluZyBkYXRhIG9iamVjdHNcclxuICAgKiBAcGFyYW0gZGF0YSBjb3JyZXNwb25kaW5nIGRhdGEgc2V0XHJcbiAgICogQHBhcmFtIG51bWJlciBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIHJldHVyblxyXG4gICAqL1xyXG4gIGdldFRvcEluc3RhbmNlcyhcclxuICAgIGRhdGE6IEpzb25GZWF0dXJlW10sXHJcbiAgICBudW1iZXI6IG51bWJlciA9IE5VTUJFUl9PRl9URVhUU1xyXG4gICk6IEpzb25GZWF0dXJlW10ge1xyXG4gICAgY29uc3QgdW5sYWJlbGVkID0gdGhpcy5nZXRVbmxhYmVsZWRJbnN0YW5jZXMoZGF0YSk7XHJcbiAgICByZXR1cm4gdW5sYWJlbGVkXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuZmVhdHVyZXNbMV1bRU5UUk9QWV9JTkRFWF0gPCBiLmZlYXR1cmVzWzFdW0VOVFJPUFlfSU5ERVhdKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnNsaWNlKDAsIG51bWJlcik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXR0ZWRBbnN3ZXJzKGFuc3dlcnM6IEFuc3dlcltdKSB7XHJcbiAgICB0aGlzLmFuc3dlcnMubmV4dChhbnN3ZXJzKTtcclxuICB9XHJcbn1cclxuIl19