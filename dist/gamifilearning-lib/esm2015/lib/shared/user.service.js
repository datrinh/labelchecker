/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function User() { }
if (false) {
    /** @type {?} */
    User.prototype.id;
    /** @type {?} */
    User.prototype.username;
    /** @type {?} */
    User.prototype.jwtToken;
}
export class UserService {
    constructor() { }
}
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserService.ctorParameters = () => [];
/** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(); }, token: UserService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UserService.prototype.user;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDLDBCQUlDOzs7SUFIQyxrQkFBVzs7SUFDWCx3QkFBaUI7O0lBQ2pCLHdCQUE0Qjs7QUFNOUIsTUFBTSxPQUFPLFdBQVc7SUFHdEIsZ0JBQWUsQ0FBQzs7O1lBTmpCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUVDLDJCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGp3dFRva2VuOiB7IHRva2VuOiBzdHJpbmcgfTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIHVzZXI6IFVzZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLy8gbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuYXBvbGxvXHJcbiAgLy8gICAgIC5xdWVyeSh7XHJcbiAgLy8gICAgICAgcXVlcnk6IGdxbGBcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgbG9naW4odXNlcm5hbWU6IFwiJHt1c2VybmFtZX1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIikge1xyXG4gIC8vICAgICAgICAgICAgIGlkLFxyXG4gIC8vICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAvLyAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAvLyAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAvLyAgICAgICAgICAgICBqd3RUb2tlbiB7XHJcbiAgLy8gICAgICAgICAgICAgICB0b2tlblxyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIGBcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnBpcGUoXHJcbiAgLy8gICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gIC8vICAgICAgICAgdGhpcy51c2VyID0gcmVzLmRhdGEubG9naW47XHJcbiAgLy8gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy51c2VyLmp3dFRva2VuLnRva2VuKTtcclxuICAvLyAgICAgICAgIHJldHVybiB0aGlzLnVzZXI7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGxvZ291dCgpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuYXBvbGxvXHJcbiAgLy8gICAgIC5xdWVyeSh7XHJcbiAgLy8gICAgICAgcXVlcnk6IGdxbGBcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgbG9nb3V0XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgYFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKFxyXG4gIC8vICAgICAgIF8gPT4ge1xyXG4gIC8vICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gIC8vICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZXJyID0+IHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpc0xvZ2dlZCgpOiBib29sZWFuIHtcclxuICAvLyAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyB0cnVlIDogZmFsc2U7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==