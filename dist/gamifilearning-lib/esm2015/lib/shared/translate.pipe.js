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
export class TranslatePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
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
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVXBELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDeEIsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFVO1FBQ2pDLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLE9BQU8sZ0RBQWdELENBQUM7WUFDMUQsS0FBSyxTQUFTO2dCQUNaLE9BQU8scUNBQXFDLENBQUM7WUFDL0MsS0FBSyxTQUFTO2dCQUNaLE9BQU8scUNBQXFDLENBQUM7WUFDL0MsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNQLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssT0FBTztnQkFDVixPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxpQkFBaUIsQ0FBQztZQUMzQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxzQkFBc0IsQ0FBQztZQUNoQyxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxZQUFZLENBQUM7WUFDdEIsS0FBSyxHQUFHO2dCQUNOLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxHQUFHO2dCQUNOLE9BQU8sV0FBVyxDQUFDO1lBQ3JCO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7O1lBL0JGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsV0FBVzthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBWZXJ5IHF1aWNrIGFuZCBkaXJ0eSBzb2x1dGlvbiB0byBcInRyYW5zbGF0ZVwiIElkcyBmcm9tIGJhY2tlbmRcbiAqIEFuZ3VsYXIgaTE4biBjdXJyZW50bHkgY2FuJ3QgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICogbmd4LXRyYW5zbGF0ZSB3b3VsZCBhZGQgYW5vdGhlciBkZXBlbmRlbmN5XG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3RyYW5zbGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJncz86IGFueSk6IGFueSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnaXNFdmVudCc6XG4gICAgICAgIHJldHVybiAnQmVzY2hyZWlidCBkZXIgVGV4dCBlaW5lIDxiPlZlcmFuc3RhbHR1bmc8L2I+Pyc7XG4gICAgICBjYXNlICdpc011c2ljJzpcbiAgICAgICAgcmV0dXJuICdHZWh0IGVzIGluaGFsdGxpY2ggdW0gPGI+TXVzaWs8L2I+Pyc7XG4gICAgICBjYXNlICdpc01vdmllJzpcbiAgICAgICAgcmV0dXJuICdHZWh0IGVzIGluaGFsdGxpY2ggdW0gPGI+RmlsbWU8L2I+Pyc7XG4gICAgICBjYXNlICd5ZXMnOlxuICAgICAgICByZXR1cm4gJ0phJztcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgcmV0dXJuICdOZWluJztcbiAgICAgIGNhc2UgJ21heWJlJzpcbiAgICAgICAgcmV0dXJuICdVbmtsYXInO1xuICAgICAgY2FzZSAnMSc6XG4gICAgICAgIHJldHVybiAnVHJpZmZ0IG5pY2h0IHp1JztcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICByZXR1cm4gJ1RyaWZmdCBlaGVyIG5pY2h0IHp1JztcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICByZXR1cm4gJ1dlacOfIG5pY2h0JztcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICByZXR1cm4gJ1RyaWZmdCBlaGVyIHp1JztcbiAgICAgIGNhc2UgJzUnOlxuICAgICAgICByZXR1cm4gJ1RyaWZmdCB6dSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=