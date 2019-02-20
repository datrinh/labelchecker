import { PipeTransform } from '@angular/core';
/**
 * Very quick and dirty solution to "translate" Ids from backend
 * Angular i18n currently can't translate variables
 * ngx-translate would add another dependency
 */
export declare class TranslatePipe implements PipeTransform {
    transform(value: string, args?: any): any;
}
