/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function JsonFeature() { }
if (false) {
    /** @type {?} */
    JsonFeature.prototype.id;
    /* Skipping unnamed member:
    'default-context': string;*/
    /** @type {?} */
    JsonFeature.prototype.features;
    /** @type {?} */
    JsonFeature.prototype.values;
}
/**
 * @record
 */
export function Features() { }
if (false) {
    /* Skipping unnamed member:
    '1': { [key: string]: number };*/
}
/**
 * @record
 */
export function Answer() { }
if (false) {
    /** @type {?} */
    Answer.prototype.documentId;
    /** @type {?} */
    Answer.prototype.questionId;
    /** @type {?} */
    Answer.prototype.answer;
}
/**
 * Single data object
 * @record
 */
export function DataObject() { }
if (false) {
    /** @type {?} */
    DataObject.prototype.objectId;
    /** @type {?} */
    DataObject.prototype.position;
    /** @type {?} */
    DataObject.prototype.selectionScore;
    /**
     * Numeric Value of a feature
     * @type {?}
     */
    DataObject.prototype.featureValues;
    /**
     * Human readable representation of feature
     * @type {?}
     */
    DataObject.prototype.featureRepresentations;
}
/**
 * @record
 */
export function ObjectToLabel() { }
if (false) {
    /** @type {?} */
    ObjectToLabel.prototype.versionId;
    /** @type {?} */
    ObjectToLabel.prototype.questionIds;
    /** @type {?} */
    ObjectToLabel.prototype.toBeLabeledFeatures;
    /** @type {?} */
    ObjectToLabel.prototype.isLabeledBy;
    /** @type {?} */
    ObjectToLabel.prototype.shownFeatures;
    /** @type {?} */
    ObjectToLabel.prototype.dataObject;
}
/**
 * @record
 */
export function FeaturesQuestionMapping() { }
if (false) {
    /** @type {?} */
    FeaturesQuestionMapping.prototype.questionId;
    /** @type {?} */
    FeaturesQuestionMapping.prototype.possibleAnswers;
}
/**
 * @record
 */
export function LabeledData() { }
if (false) {
    /** @type {?} */
    LabeledData.prototype.objectId;
    /** @type {?} */
    LabeledData.prototype.labellingFinished;
    /** @type {?} */
    LabeledData.prototype.answers;
}
/**
 * Data set returned from backend
 * @record
 */
export function DataSet() { }
if (false) {
    /** @type {?} */
    DataSet.prototype.dataObjects;
    /** @type {?} */
    DataSet.prototype.datasetId;
    /** @type {?} */
    DataSet.prototype.metrics;
}
/**
 * (Single) labeled answer to be sent to backend
 * @record
 */
export function LabelOutput() { }
if (false) {
    /** @type {?} */
    LabelOutput.prototype.dataObjectId;
    /** @type {?} */
    LabelOutput.prototype.dataSetId;
    /** @type {?} */
    LabelOutput.prototype.userId;
    /** @type {?} */
    LabelOutput.prototype.questionId;
    /** @type {?} */
    LabelOutput.prototype.customerId;
    /**
     * Options might change in the future
     * @type {?}
     */
    LabelOutput.prototype.answer;
}
/**
 * @record
 */
export function BackendResponse() { }
if (false) {
    /** @type {?} */
    BackendResponse.prototype.objectId;
    /** @type {?} */
    BackendResponse.prototype.versionId;
    /* Skipping unnamed member:
    'default-context': string;*/
    /** @type {?} */
    BackendResponse.prototype.labeledBy;
    /** @type {?} */
    BackendResponse.prototype.text;
    /** @type {?} */
    BackendResponse.prototype.toBeLabeled;
    /** @type {?} */
    BackendResponse.prototype.displayFeature;
    /** @type {?} */
    BackendResponse.prototype.reductionAlgorithm;
    /** @type {?} */
    BackendResponse.prototype.selectionScore;
    /** @type {?} */
    BackendResponse.prototype.featuresValues;
    /** @type {?} */
    BackendResponse.prototype.featureRepresentations;
}
/**
 * @record
 */
function FeaturesValues() { }
if (false) {
    /* Skipping unnamed member:
    '1': { [key: string]: number };*/
}
/**
 * @record
 */
function ToBeLabeled() { }
if (false) {
    /** @type {?} */
    ToBeLabeled.prototype.featureId;
    /** @type {?} */
    ToBeLabeled.prototype.question;
}
/**
 * @record
 */
function Question() { }
if (false) {
    /** @type {?} */
    Question.prototype.questionId;
    /** @type {?} */
    Question.prototype.customerId;
    /** @type {?} */
    Question.prototype.possibleAnswers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYW1pZmlsZWFybmluZy1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2RhdGEuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxpQ0FLQzs7O0lBSkMseUJBQVc7Ozs7SUFFWCwrQkFBbUI7O0lBQ25CLDZCQUFrQzs7Ozs7QUFHcEMsOEJBRUM7Ozs7Ozs7O0FBUUQsNEJBSUM7OztJQUhDLDRCQUFtQjs7SUFDbkIsNEJBQW1COztJQUNuQix3QkFBZTs7Ozs7O0FBSWpCLGdDQWFDOzs7SUFaQyw4QkFBaUI7O0lBRWpCLDhCQUdFOztJQUNGLG9DQUF1Qjs7Ozs7SUFHdkIsbUNBQXlDOzs7OztJQUV6Qyw0Q0FBa0Q7Ozs7O0FBR3BELG1DQU9DOzs7SUFOQyxrQ0FBa0I7O0lBQ2xCLG9DQUFzQjs7SUFDdEIsNENBQThCOztJQUM5QixvQ0FBc0I7O0lBQ3RCLHNDQUF3Qjs7SUFDeEIsbUNBQXVCOzs7OztBQUd6Qiw2Q0FHQzs7O0lBRkMsNkNBQW1COztJQUNuQixrREFBMEI7Ozs7O0FBRzVCLGlDQUlDOzs7SUFIQywrQkFBaUI7O0lBQ2pCLHdDQUEyQjs7SUFDM0IsOEJBQWtCOzs7Ozs7QUFJcEIsNkJBV0M7OztJQVZDLDhCQUEwQjs7SUFDMUIsNEJBQWtCOztJQUNsQiwwQkFPRTs7Ozs7O0FBS0osaUNBUUM7OztJQVBDLG1DQUFxQjs7SUFDckIsZ0NBQWtCOztJQUNsQiw2QkFBZTs7SUFDZixpQ0FBbUI7O0lBQ25CLGlDQUFtQjs7Ozs7SUFFbkIsNkJBQStCOzs7OztBQUdqQyxxQ0FZQzs7O0lBWEMsbUNBQTBCOztJQUMxQixvQ0FBa0I7Ozs7SUFFbEIsb0NBQW9COztJQUNwQiwrQkFBYTs7SUFDYixzQ0FBMkI7O0lBQzNCLHlDQUF5Qjs7SUFDekIsNkNBQTJCOztJQUMzQix5Q0FBdUI7O0lBQ3ZCLHlDQUErQjs7SUFDL0IsaURBQWtEOzs7OztBQUdwRCw2QkFFQzs7Ozs7Ozs7QUFFRCwwQkFHQzs7O0lBRkMsZ0NBQWtCOztJQUNsQiwrQkFBbUI7Ozs7O0FBR3JCLHVCQUlDOzs7SUFIQyw4QkFBbUI7O0lBQ25CLDhCQUFtQjs7SUFDbkIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBKc29uRmVhdHVyZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICAnZGVmYXVsdC1jb250ZXh0Jzogc3RyaW5nO1xyXG4gIGZlYXR1cmVzOiBGZWF0dXJlcztcclxuICB2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xyXG4gICcxJzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbiB7XHJcbi8vICAgaWQ6IHN0cmluZztcclxuLy8gICBsYWJlbDogc3RyaW5nO1xyXG4vLyAgIGN1c3RvbWVySWQ6IHN0cmluZztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbnN3ZXIge1xyXG4gIGRvY3VtZW50SWQ6IHN0cmluZztcclxuICBxdWVzdGlvbklkOiBzdHJpbmc7XHJcbiAgYW5zd2VyOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBTaW5nbGUgZGF0YSBvYmplY3QgKi9cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhT2JqZWN0IHtcclxuICBvYmplY3RJZDogc3RyaW5nO1xyXG4gIC8vIFRPRE86IEdseXBoYm9hcmQgaGFuZGxlcyB0aGlzIGluIHNlcGFyYXRlIHBvc2l0aW9ucyBmaWxlXHJcbiAgcG9zaXRpb246IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICB9O1xyXG4gIHNlbGVjdGlvblNjb3JlOiBudW1iZXI7XHJcbiAgLy8gISBCcmVha2luZyB3aXRoIGdseXBoYm9hcmRzIGN1cnJlbnRseSBpcnJpdGF0aW5nIG5hbWluZyBjb252ZW50aW9uXHJcbiAgLyoqIE51bWVyaWMgVmFsdWUgb2YgYSBmZWF0dXJlICovXHJcbiAgZmVhdHVyZVZhbHVlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcclxuICAvKiogSHVtYW4gcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2YgZmVhdHVyZSAqL1xyXG4gIGZlYXR1cmVSZXByZXNlbnRhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VG9MYWJlbCB7XHJcbiAgdmVyc2lvbklkOiBzdHJpbmc7XHJcbiAgcXVlc3Rpb25JZHM6IHN0cmluZ1tdO1xyXG4gIHRvQmVMYWJlbGVkRmVhdHVyZXM6IHN0cmluZ1tdO1xyXG4gIGlzTGFiZWxlZEJ5OiBzdHJpbmdbXTtcclxuICBzaG93bkZlYXR1cmVzOiBzdHJpbmdbXTtcclxuICBkYXRhT2JqZWN0OiBEYXRhT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVzUXVlc3Rpb25NYXBwaW5nIHtcclxuICBxdWVzdGlvbklkOiBzdHJpbmc7XHJcbiAgcG9zc2libGVBbnN3ZXJzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYWJlbGVkRGF0YSB7XHJcbiAgb2JqZWN0SWQ6IG51bWJlcjtcclxuICBsYWJlbGxpbmdGaW5pc2hlZDogYm9vbGVhbjtcclxuICBhbnN3ZXJzOiBBbnN3ZXJbXTtcclxufVxyXG5cclxuLyoqIERhdGEgc2V0IHJldHVybmVkIGZyb20gYmFja2VuZCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTZXQge1xyXG4gIGRhdGFPYmplY3RzOiBEYXRhT2JqZWN0W107XHJcbiAgZGF0YXNldElkOiBzdHJpbmc7XHJcbiAgbWV0cmljczogW1xyXG4gICAge1xyXG4gICAgICB2ZXJzaW9uSWQ6IHN0cmluZztcclxuICAgICAgbWV0cmljczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IG51bWJlcjtcclxuICAgICAgfTtcclxuICAgIH1cclxuICBdO1xyXG59XHJcblxyXG4vLyBUaGlzIGlmIHRoZSBjYXNlIGlmIHdlIHNlbmQgYWZ0ZXIgZWFjaCBhbnN3ZXJcclxuLyoqIChTaW5nbGUpIGxhYmVsZWQgYW5zd2VyIHRvIGJlIHNlbnQgdG8gYmFja2VuZCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExhYmVsT3V0cHV0IHtcclxuICBkYXRhT2JqZWN0SWQ6IHN0cmluZztcclxuICBkYXRhU2V0SWQ6IHN0cmluZzsgLy8gcmVkdW5kYW50P1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIHF1ZXN0aW9uSWQ6IHN0cmluZztcclxuICBjdXN0b21lcklkOiBzdHJpbmc7XHJcbiAgLyoqIE9wdGlvbnMgbWlnaHQgY2hhbmdlIGluIHRoZSBmdXR1cmUgKi9cclxuICBhbnN3ZXI6ICd5ZXMnIHwgJ25vJyB8ICdtYXliZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFja2VuZFJlc3BvbnNlIHtcclxuICBvYmplY3RJZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIHZlcnNpb25JZDogbnVtYmVyO1xyXG4gICdkZWZhdWx0LWNvbnRleHQnOiBzdHJpbmc7XHJcbiAgbGFiZWxlZEJ5OiBzdHJpbmdbXTtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgdG9CZUxhYmVsZWQ6IFRvQmVMYWJlbGVkW107XHJcbiAgZGlzcGxheUZlYXR1cmU6IHN0cmluZ1tdO1xyXG4gIHJlZHVjdGlvbkFsZ29yaXRobTogc3RyaW5nO1xyXG4gIHNlbGVjdGlvblNjb3JlOiBudW1iZXI7XHJcbiAgZmVhdHVyZXNWYWx1ZXM6IEZlYXR1cmVzVmFsdWVzO1xyXG4gIGZlYXR1cmVSZXByZXNlbnRhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBGZWF0dXJlc1ZhbHVlcyB7XHJcbiAgJzEnOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG9CZUxhYmVsZWQge1xyXG4gIGZlYXR1cmVJZDogc3RyaW5nO1xyXG4gIHF1ZXN0aW9uOiBRdWVzdGlvbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1ZXN0aW9uIHtcclxuICBxdWVzdGlvbklkOiBzdHJpbmc7XHJcbiAgY3VzdG9tZXJJZDogc3RyaW5nO1xyXG4gIHBvc3NpYmxlQW5zd2Vyczogc3RyaW5nW107XHJcbn1cclxuIl19