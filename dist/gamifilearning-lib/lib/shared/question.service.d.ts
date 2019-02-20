import { JsonFeature, BackendResponse, Answer } from './data.interface.js';
export declare class QuestionService {
    data: JsonFeature[];
    private currentInstance;
    currentInstance$: import("rxjs/internal/Observable").Observable<BackendResponse>;
    private answers;
    answers$: import("rxjs/internal/Observable").Observable<Answer[]>;
    constructor();
    getUnlabeledInstances(data?: JsonFeature[]): JsonFeature[];
    /**
     * Return top scoring data objects
     * @param data corresponding data set
     * @param number number of instances to return
     */
    getTopInstances(data: JsonFeature[], number?: number): JsonFeature[];
    handleSubmittedAnswers(answers: Answer[]): void;
}
