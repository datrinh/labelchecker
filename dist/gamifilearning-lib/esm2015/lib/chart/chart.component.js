/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class ChartComponent {
    constructor() {
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
    ngOnInit() { }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-chart',
                template: "<!--\r\n  <ngx-charts-number-card [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"multi\" [cardColor]=\"'#263238'\" [textColor]=\"'white'\"></ngx-charts-number-card>\r\n-->\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxNQUFNLE9BQU8sY0FBYztJQTRCekI7UUEzQkEsU0FBSSxHQUFHLFNBQVMsQ0FBQzs7UUFHakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQixnQkFBVyxHQUFHO1lBQ1osTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1NBQ3JELENBQUM7UUFFRixVQUFLLEdBQVU7WUFDYjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsRUFBRTthQUNWO1NBQ0YsQ0FBQztJQUNhLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQW5DZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGlNQUFxQzs7YUFFdEM7Ozs7OztJQUVDLDhCQUFpQjs7SUFHakIsbUNBQWlCOztJQUNqQixtQ0FBaUI7O0lBQ2pCLGtDQUFpQjs7SUFDakIsb0NBQWtCOztJQUNsQix3Q0FBc0I7O0lBQ3RCLG9DQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0QixvQ0FBMkI7O0lBQzNCLGtDQUFnQjs7SUFFaEIscUNBRUU7O0lBRUYsK0JBU0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdmlldyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gb3B0aW9uc1xyXG4gIHNob3dYQXhpcyA9IHRydWU7XHJcbiAgc2hvd1lBeGlzID0gdHJ1ZTtcclxuICBncmFkaWVudCA9IGZhbHNlO1xyXG4gIHNob3dMZWdlbmQgPSB0cnVlO1xyXG4gIHNob3dYQXhpc0xhYmVsID0gdHJ1ZTtcclxuICB4QXhpc0xhYmVsID0gJ051bWJlcic7XHJcbiAgc2hvd1lBeGlzTGFiZWwgPSB0cnVlO1xyXG4gIHlBeGlzTGFiZWwgPSAnQ29sb3IgVmFsdWUnO1xyXG4gIHRpbWVsaW5lID0gdHJ1ZTtcclxuXHJcbiAgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzVBQTQ1NCcsICcjQTEwQTI4JywgJyNDN0I0MkMnLCAnI0FBQUFBQSddXHJcbiAgfTtcclxuXHJcbiAgbXVsdGk6IGFueVtdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQWNjdXJhY3knLFxyXG4gICAgICB2YWx1ZTogODNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdGMSBTY29yZScsXHJcbiAgICAgIHZhbHVlOiA5MVxyXG4gICAgfVxyXG4gIF07XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19