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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVXBELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDeEIsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFVO1FBQ2pDLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLE9BQU8sZ0RBQWdELENBQUM7WUFDMUQsS0FBSyxTQUFTO2dCQUNaLE9BQU8scUNBQXFDLENBQUM7WUFDL0MsS0FBSyxTQUFTO2dCQUNaLE9BQU8scUNBQXFDLENBQUM7WUFDL0MsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNQLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssT0FBTztnQkFDVixPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNILENBQUM7OztZQXJCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVmVyeSBxdWljayBhbmQgZGlydHkgc29sdXRpb24gdG8gXCJ0cmFuc2xhdGVcIiBJZHMgZnJvbSBiYWNrZW5kXG4gKiBBbmd1bGFyIGkxOG4gY3VycmVudGx5IGNhbid0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAqIG5neC10cmFuc2xhdGUgd291bGQgYWRkIGFub3RoZXIgZGVwZW5kZW5jeVxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmFuc2xhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2lzRXZlbnQnOlxuICAgICAgICByZXR1cm4gJ0Jlc2NocmVpYnQgZGVyIFRleHQgZWluZSA8Yj5WZXJhbnN0YWx0dW5nPC9iPj8nO1xuICAgICAgY2FzZSAnaXNNdXNpYyc6XG4gICAgICAgIHJldHVybiAnR2VodCBlcyBpbmhhbHRsaWNoIHVtIDxiPk11c2lrPC9iPj8nO1xuICAgICAgY2FzZSAnaXNNb3ZpZSc6XG4gICAgICAgIHJldHVybiAnR2VodCBlcyBpbmhhbHRsaWNoIHVtIDxiPkZpbG1lPC9iPj8nO1xuICAgICAgY2FzZSAneWVzJzpcbiAgICAgICAgcmV0dXJuICdKYSc7XG4gICAgICBjYXNlICdubyc6XG4gICAgICAgIHJldHVybiAnTmVpbic7XG4gICAgICBjYXNlICdtYXliZSc6XG4gICAgICAgIHJldHVybiAnVW5rbGFyJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==