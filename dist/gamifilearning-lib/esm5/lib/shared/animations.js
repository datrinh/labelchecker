/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { style, animation, animate, keyframes } from '@angular/animations';
/** @type {?} */
export var pulseAnimation = animation([
    style({ transform: 'scale(1)' }),
    animate('{{ timings }}', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale({{ scale }})', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 })
    ]))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbWlmaWxlYXJuaW5nLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUzRSxNQUFNLEtBQU8sY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUN0QyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDaEMsT0FBTyxDQUNMLGVBQWUsRUFDZixTQUFTLENBQUM7UUFDUixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQzVDLENBQUMsQ0FDSDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZSwgYW5pbWF0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBwdWxzZUFuaW1hdGlvbiA9IGFuaW1hdGlvbihbXHJcbiAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXHJcbiAgYW5pbWF0ZShcclxuICAgICd7eyB0aW1pbmdzIH19JyxcclxuICAgIGtleWZyYW1lcyhbXHJcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDAgfSksXHJcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoe3sgc2NhbGUgfX0pJywgb2Zmc2V0OiAwLjUgfSksXHJcbiAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDEgfSlcclxuICAgIF0pXHJcbiAgKVxyXG5dKTtcclxuIl19