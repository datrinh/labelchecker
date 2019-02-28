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
    /**
     * @return {?}
     */
    QuestionService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.answers.next([]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcXVlc3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFL0U7SUFZRTtRQVJBLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBRWpCLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxDQUFDO1FBQ3JFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0MsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELGFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3JDLDZCQUE2QjtJQUMvQixDQUFDOzs7OztJQUVELCtDQUFxQjs7OztJQUFyQixVQUFzQixJQUErQjtRQUEvQixxQkFBQSxFQUFBLE9BQXNCLElBQUksQ0FBQyxJQUFJO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx5Q0FBZTs7Ozs7O0lBQWYsVUFDRSxJQUFtQixFQUNuQixNQUFnQztRQUFoQyx1QkFBQSxFQUFBLHdCQUFnQzs7WUFFMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFDbEQsT0FBTyxTQUFTO2FBQ2IsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDL0QsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZ0RBQXNCOzs7O0lBQXRCLFVBQXVCLE9BQWlCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkEvQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBUEQ7Q0FxREMsQUFoREQsSUFnREM7U0E3Q1ksZUFBZTs7O0lBQzFCLCtCQUF5Qjs7Ozs7SUFFekIsMENBQXFFOztJQUNyRSwyQ0FBdUQ7Ozs7O0lBRXZELGtDQUFvRDs7SUFDcEQsbUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSnNvbkZlYXR1cmUsIEJhY2tlbmRSZXNwb25zZSwgQW5zd2VyIH0gZnJvbSAnLi9kYXRhLmludGVyZmFjZS5qcyc7XHJcbmltcG9ydCB7IE5VTUJFUl9PRl9URVhUUywgVU5MQUJFTEVEX0lOREVYLCBFTlRST1BZX0lOREVYIH0gZnJvbSAnLi4vY29uZmlnLmpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2VydmljZSB7XHJcbiAgZGF0YTogSnNvbkZlYXR1cmVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRJbnN0YW5jZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QmFja2VuZFJlc3BvbnNlPihudWxsKTtcclxuICBjdXJyZW50SW5zdGFuY2UkID0gdGhpcy5jdXJyZW50SW5zdGFuY2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgYW5zd2VycyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QW5zd2VyW10+KFtdKTtcclxuICBhbnN3ZXJzJCA9IHRoaXMuYW5zd2Vycy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoLyoqIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UqLykge1xyXG4gICAgLy8gdGhpcy51cGRhdGVOZXh0SW5zdGFuY2UoKTtcclxuICB9XHJcblxyXG4gIGdldFVubGFiZWxlZEluc3RhbmNlcyhkYXRhOiBKc29uRmVhdHVyZVtdID0gdGhpcy5kYXRhKTogSnNvbkZlYXR1cmVbXSB7XHJcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoZmVhdHVyZSA9PiBmZWF0dXJlLmZlYXR1cmVzWzFdW1VOTEFCRUxFRF9JTkRFWF0gIT0gbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gdG9wIHNjb3JpbmcgZGF0YSBvYmplY3RzXHJcbiAgICogQHBhcmFtIGRhdGEgY29ycmVzcG9uZGluZyBkYXRhIHNldFxyXG4gICAqIEBwYXJhbSBudW1iZXIgbnVtYmVyIG9mIGluc3RhbmNlcyB0byByZXR1cm5cclxuICAgKi9cclxuICBnZXRUb3BJbnN0YW5jZXMoXHJcbiAgICBkYXRhOiBKc29uRmVhdHVyZVtdLFxyXG4gICAgbnVtYmVyOiBudW1iZXIgPSBOVU1CRVJfT0ZfVEVYVFNcclxuICApOiBKc29uRmVhdHVyZVtdIHtcclxuICAgIGNvbnN0IHVubGFiZWxlZCA9IHRoaXMuZ2V0VW5sYWJlbGVkSW5zdGFuY2VzKGRhdGEpO1xyXG4gICAgcmV0dXJuIHVubGFiZWxlZFxyXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLmZlYXR1cmVzWzFdW0VOVFJPUFlfSU5ERVhdIDwgYi5mZWF0dXJlc1sxXVtFTlRST1BZX0lOREVYXSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zbGljZSgwLCBudW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0dGVkQW5zd2VycyhhbnN3ZXJzOiBBbnN3ZXJbXSkge1xyXG4gICAgdGhpcy5hbnN3ZXJzLm5leHQoYW5zd2Vycyk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuYW5zd2Vycy5uZXh0KFtdKTtcclxuICB9XHJcbn1cclxuIl19