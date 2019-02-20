import { HttpClient } from '@angular/common/http';
export declare class GamificationService {
    private http;
    private score;
    score$: import("rxjs/internal/Observable").Observable<number>;
    private progress;
    progress$: import("rxjs/internal/Observable").Observable<number>;
    constructor(http: HttpClient);
    increaseScore(weight: number): void;
    getTrivia(date?: Date): import("rxjs/internal/Observable").Observable<string>;
    getRandomGif(query: string): import("rxjs/internal/Observable").Observable<{}>;
    private fetchScore;
    private doIncreaseScore;
    /** Helper function to chose a random element from an array */
    private getRandomElement;
}
