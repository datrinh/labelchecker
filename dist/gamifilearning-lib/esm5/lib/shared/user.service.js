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
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return []; };
    /** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(); }, token: UserService, providedIn: "root" });
    return UserService;
}());
export { UserService };
if (false) {
    /** @type {?} */
    UserService.prototype.user;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FtaWZpbGVhcm5pbmctbGliLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDLDBCQUlDOzs7SUFIQyxrQkFBVzs7SUFDWCx3QkFBaUI7O0lBQ2pCLHdCQUE0Qjs7QUFHOUI7SUFNRTtJQUFlLENBQUM7O2dCQU5qQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztzQkFiRDtDQW9FQyxBQXpERCxJQXlEQztTQXREWSxXQUFXOzs7SUFDdEIsMkJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgand0VG9rZW46IHsgdG9rZW46IHN0cmluZyB9O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgdXNlcjogVXNlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvLyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5hcG9sbG9cclxuICAvLyAgICAgLnF1ZXJ5KHtcclxuICAvLyAgICAgICBxdWVyeTogZ3FsYFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICBsb2dpbih1c2VybmFtZTogXCIke3VzZXJuYW1lfVwiLCBwYXNzd29yZDogXCIke3Bhc3N3b3JkfVwiKSB7XHJcbiAgLy8gICAgICAgICAgICAgaWQsXHJcbiAgLy8gICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gIC8vICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gIC8vICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICAgIGp3dFRva2VuIHtcclxuICAvLyAgICAgICAgICAgICAgIHRva2VuXHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgYFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAucGlwZShcclxuICAvLyAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XHJcbiAgLy8gICAgICAgICB0aGlzLnVzZXIgPSByZXMuZGF0YS5sb2dpbjtcclxuICAvLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0aGlzLnVzZXIuand0VG9rZW4udG9rZW4pO1xyXG4gIC8vICAgICAgICAgcmV0dXJuIHRoaXMudXNlcjtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gbG9nb3V0KCk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5hcG9sbG9cclxuICAvLyAgICAgLnF1ZXJ5KHtcclxuICAvLyAgICAgICBxdWVyeTogZ3FsYFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICBsb2dvdXRcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICBgXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUoXHJcbiAgLy8gICAgICAgXyA9PiB7XHJcbiAgLy8gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBlcnIgPT4ge1xyXG4gIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlzTG9nZ2VkKCk6IGJvb2xlYW4ge1xyXG4gIC8vICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/IHRydWUgOiBmYWxzZTtcclxuICAvLyB9XHJcbn1cclxuIl19