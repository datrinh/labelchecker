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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBT3BEO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7O0lBbEJDLGlDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVU7UUFDakMsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxnREFBZ0QsQ0FBQztZQUMxRCxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxxQ0FBcUMsQ0FBQztZQUMvQyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxxQ0FBcUMsQ0FBQztZQUMvQyxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sUUFBUSxDQUFDO1lBQ2xCO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7Z0JBckJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBb0JELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FuQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBWZXJ5IHF1aWNrIGFuZCBkaXJ0eSBzb2x1dGlvbiB0byBcInRyYW5zbGF0ZVwiIElkcyBmcm9tIGJhY2tlbmRcbiAqIEFuZ3VsYXIgaTE4biBjdXJyZW50bHkgY2FuJ3QgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICogbmd4LXRyYW5zbGF0ZSB3b3VsZCBhZGQgYW5vdGhlciBkZXBlbmRlbmN5XG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3RyYW5zbGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJncz86IGFueSk6IGFueSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnaXNFdmVudCc6XG4gICAgICAgIHJldHVybiAnQmVzY2hyZWlidCBkZXIgVGV4dCBlaW5lIDxiPlZlcmFuc3RhbHR1bmc8L2I+Pyc7XG4gICAgICBjYXNlICdpc011c2ljJzpcbiAgICAgICAgcmV0dXJuICdHZWh0IGVzIGluaGFsdGxpY2ggdW0gPGI+TXVzaWs8L2I+Pyc7XG4gICAgICBjYXNlICdpc01vdmllJzpcbiAgICAgICAgcmV0dXJuICdHZWh0IGVzIGluaGFsdGxpY2ggdW0gPGI+RmlsbWU8L2I+Pyc7XG4gICAgICBjYXNlICd5ZXMnOlxuICAgICAgICByZXR1cm4gJ0phJztcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgcmV0dXJuICdOZWluJztcbiAgICAgIGNhc2UgJ21heWJlJzpcbiAgICAgICAgcmV0dXJuICdVbmtsYXInO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19