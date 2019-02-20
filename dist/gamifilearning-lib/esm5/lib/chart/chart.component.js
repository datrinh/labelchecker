/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
export { ChartComponent };
if (false) {
    /** @type {?} */
    ChartComponent.prototype.view;
    /** @type {?} */
    ChartComponent.prototype.showXAxis;
    /** @type {?} */
    ChartComponent.prototype.showYAxis;
    /** @type {?} */
    ChartComponent.prototype.gradient;
    /** @type {?} */
    ChartComponent.prototype.showLegend;
    /** @type {?} */
    ChartComponent.prototype.showXAxisLabel;
    /** @type {?} */
    ChartComponent.prototype.xAxisLabel;
    /** @type {?} */
    ChartComponent.prototype.showYAxisLabel;
    /** @type {?} */
    ChartComponent.prototype.yAxisLabel;
    /** @type {?} */
    ChartComponent.prototype.timeline;
    /** @type {?} */
    ChartComponent.prototype.colorScheme;
    /** @type {?} */
    ChartComponent.prototype.multi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQWlDRTtRQTNCQSxTQUFJLEdBQUcsU0FBUyxDQUFDOztRQUdqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGdCQUFXLEdBQUc7WUFDWixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDckQsQ0FBQztRQUVGLFVBQUssR0FBVTtZQUNiO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFO2FBQ1Y7U0FDRixDQUFDO0lBQ2EsQ0FBQzs7OztJQUVoQixpQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFuQ2QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixpTUFBcUM7O2lCQUV0Qzs7OztJQWdDRCxxQkFBQztDQUFBLEFBcENELElBb0NDO1NBL0JZLGNBQWM7OztJQUN6Qiw4QkFBaUI7O0lBR2pCLG1DQUFpQjs7SUFDakIsbUNBQWlCOztJQUNqQixrQ0FBaUI7O0lBQ2pCLG9DQUFrQjs7SUFDbEIsd0NBQXNCOztJQUN0QixvQ0FBc0I7O0lBQ3RCLHdDQUFzQjs7SUFDdEIsb0NBQTJCOztJQUMzQixrQ0FBZ0I7O0lBRWhCLHFDQUVFOztJQUVGLCtCQVNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHZpZXcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIG9wdGlvbnNcclxuICBzaG93WEF4aXMgPSB0cnVlO1xyXG4gIHNob3dZQXhpcyA9IHRydWU7XHJcbiAgZ3JhZGllbnQgPSBmYWxzZTtcclxuICBzaG93TGVnZW5kID0gdHJ1ZTtcclxuICBzaG93WEF4aXNMYWJlbCA9IHRydWU7XHJcbiAgeEF4aXNMYWJlbCA9ICdOdW1iZXInO1xyXG4gIHNob3dZQXhpc0xhYmVsID0gdHJ1ZTtcclxuICB5QXhpc0xhYmVsID0gJ0NvbG9yIFZhbHVlJztcclxuICB0aW1lbGluZSA9IHRydWU7XHJcblxyXG4gIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyM1QUE0NTQnLCAnI0ExMEEyOCcsICcjQzdCNDJDJywgJyNBQUFBQUEnXVxyXG4gIH07XHJcblxyXG4gIG11bHRpOiBhbnlbXSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0FjY3VyYWN5JyxcclxuICAgICAgdmFsdWU6IDgzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRjEgU2NvcmUnLFxyXG4gICAgICB2YWx1ZTogOTFcclxuICAgIH1cclxuICBdO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==