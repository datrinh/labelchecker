/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UNLABELED_INDEX, ENTROPY_INDEX, URL_TO_DATA } from '../config';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ CommunicationService.ngInjectableDef = i0.defineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(i0.inject(i1.HttpClient)); }, token: CommunicationService, providedIn: "root" });
    return CommunicationService;
}());
export { CommunicationService };
if (false) {
    /** @type {?} */
    CommunicationService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7OztBQUUvRDtJQUtFLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRHBDLFNBQUksR0FBa0IsRUFBRSxDQUFDO0lBQ2MsQ0FBQzs7Ozs7SUFDeEMsdUNBQVE7Ozs7SUFBUixVQUFTLEdBQXlCO1FBQWxDLGlCQUlDO1FBSlEsb0JBQUEsRUFBQSxpQkFBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBZ0IsV0FBVyxDQUFDO2FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0VBQXNFOzs7Ozs7SUFDdEUsOENBQWU7Ozs7O0lBQWYsVUFBZ0IsSUFBbUI7O1lBQzNCLFFBQVEsR0FBRyxJQUFJO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0Q7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7K0JBTG5CO0NBb0RDLEFBN0NELElBNkNDO1NBMUNZLG9CQUFvQjs7O0lBQy9CLG9DQUF5Qjs7Ozs7SUFDYixvQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpzb25GZWF0dXJlLCBCYWNrZW5kUmVzcG9uc2UsIEFuc3dlciB9IGZyb20gJy4vZGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFVOTEFCRUxFRF9JTkRFWCwgRU5UUk9QWV9JTkRFWCwgVVJMX1RPX0RBVEEgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcclxuICBkYXRhOiBKc29uRmVhdHVyZVtdID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG4gIGxvYWREYXRhKHNyYzogc3RyaW5nID0gVVJMX1RPX0RBVEEpOiBPYnNlcnZhYmxlPEpzb25GZWF0dXJlW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxKc29uRmVhdHVyZVtdPihVUkxfVE9fREFUQSlcclxuICAgICAgLnBpcGUobWFwKHJlcyA9PiB0aGlzLmVuaGFuY2VGZWF0dXJlcyhyZXMpKSk7XHJcbiAgfVxyXG5cclxuICAvKiogTW9ja2luZyBkYXRhIHRvIGFkZCB1bmxhYmVsZWQgZGF0YSBhbmQgc2VsZWN0aW9uU2NvcmUgKGVudHJvcHkpICovXHJcbiAgZW5oYW5jZUZlYXR1cmVzKGRhdGE6IEpzb25GZWF0dXJlW10pOiBKc29uRmVhdHVyZVtdIHtcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gZGF0YTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoIC8gMjsgaSsrKSB7XHJcbiAgICAgIGZlYXR1cmVzW2ldWydmZWF0dXJlcyddWzFdW1VOTEFCRUxFRF9JTkRFWF0gPSAwO1xyXG4gICAgICBmZWF0dXJlc1tpXVsnZmVhdHVyZXMnXVsxXVtFTlRST1BZX0lOREVYXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmVhdHVyZXM7XHJcbiAgfVxyXG5cclxuICAvLyBnZXROZXh0SW5zdGFuY2UoKTogT2JzZXJ2YWJsZTxCYWNrZW5kUmVzcG9uc2U+IHtcclxuICAvLyAgIC8vIFRPRE8gY2xlYW4gdXAgc3Vic2NyaWJlIGNoYWluXHJcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldDxCYWNrZW5kUmVzcG9uc2U+KCdhc3NldHMvbW9jay5kYXRhb2JqZWN0Lmpzb24nKS5waXBlKFxyXG4gIC8vICAgICBtYXAob2JqID0+IHtcclxuICAvLyAgICAgICB0aGlzLmh0dHBcclxuICAvLyAgICAgICAgIC5nZXQ8c3RyaW5nPignaHR0cHM6Ly9pY2FuaGF6ZGFkam9rZS5jb20vJywge1xyXG4gIC8vICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gIC8vICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICAgICAgICAgIH0pXHJcbiAgLy8gICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgLnN1YnNjcmliZSgocXVvdGU6IGFueSkgPT4ge1xyXG4gIC8vICAgICAgICAgICBvYmoudGV4dCA9IHF1b3RlLmpva2U7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICBvYmoub2JqZWN0SWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gIC8vICAgICAgIHJldHVybiBvYmo7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc2VuZEFuc3dlcnNCYWNrKGFuc3dlcjogQW5zd2VyW10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAvLyAgIC8vIEZha2UgY29ubmVjdGlvblxyXG4gIC8vICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=