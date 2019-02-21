/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * Very quick and dirty solution to "translate" Ids from backend
 * Angular i18n currently can't translate variables
 * ngx-translate would add another dependency
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        switch (value) {
            case 'isEvent':
                return 'Beschreibt der Text eine <b>Veranstaltung</b>?';
            case 'isMusic':
                return 'Geht es inhaltlich um <b>Musik</b>?';
            case 'isMovie':
                return 'Geht es inhaltlich um <b>Filme</b>?';
            case 'yes':
                return 'Ja';
            case 'no':
                return 'Nein';
            case 'maybe':
                return 'Unklar';
            case '1':
                return 'Trifft nicht zu';
            case '2':
                return 'Trifft eher nicht zu';
            case '3':
                return 'Weiß nicht';
            case '4':
                return 'Trifft eher zu';
            case '5':
                return 'Trifft zu';
            default:
                return value;
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate'
                },] }
    ];
    return TranslatePipe;
}());
export { TranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBT3BEO0lBQUE7SUFnQ0EsQ0FBQzs7Ozs7O0lBNUJDLGlDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVU7UUFDakMsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxnREFBZ0QsQ0FBQztZQUMxRCxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxxQ0FBcUMsQ0FBQztZQUMvQyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxxQ0FBcUMsQ0FBQztZQUMvQyxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssR0FBRztnQkFDTixPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssR0FBRztnQkFDTixPQUFPLHNCQUFzQixDQUFDO1lBQ2hDLEtBQUssR0FBRztnQkFDTixPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxXQUFXLENBQUM7WUFDckI7Z0JBQ0UsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDSCxDQUFDOztnQkEvQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO2lCQUNsQjs7SUE4QkQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFZlcnkgcXVpY2sgYW5kIGRpcnR5IHNvbHV0aW9uIHRvIFwidHJhbnNsYXRlXCIgSWRzIGZyb20gYmFja2VuZFxuICogQW5ndWxhciBpMThuIGN1cnJlbnRseSBjYW4ndCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gKiBuZ3gtdHJhbnNsYXRlIHdvdWxkIGFkZCBhbm90aGVyIGRlcGVuZGVuY3lcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAndHJhbnNsYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzPzogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdpc0V2ZW50JzpcbiAgICAgICAgcmV0dXJuICdCZXNjaHJlaWJ0IGRlciBUZXh0IGVpbmUgPGI+VmVyYW5zdGFsdHVuZzwvYj4/JztcbiAgICAgIGNhc2UgJ2lzTXVzaWMnOlxuICAgICAgICByZXR1cm4gJ0dlaHQgZXMgaW5oYWx0bGljaCB1bSA8Yj5NdXNpazwvYj4/JztcbiAgICAgIGNhc2UgJ2lzTW92aWUnOlxuICAgICAgICByZXR1cm4gJ0dlaHQgZXMgaW5oYWx0bGljaCB1bSA8Yj5GaWxtZTwvYj4/JztcbiAgICAgIGNhc2UgJ3llcyc6XG4gICAgICAgIHJldHVybiAnSmEnO1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICByZXR1cm4gJ05laW4nO1xuICAgICAgY2FzZSAnbWF5YmUnOlxuICAgICAgICByZXR1cm4gJ1Vua2xhcic7XG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgcmV0dXJuICdUcmlmZnQgbmljaHQgenUnO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiAnVHJpZmZ0IGVoZXIgbmljaHQgenUnO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiAnV2Vpw58gbmljaHQnO1xuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIHJldHVybiAnVHJpZmZ0IGVoZXIgenUnO1xuICAgICAgY2FzZSAnNSc6XG4gICAgICAgIHJldHVybiAnVHJpZmZ0IHp1JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==