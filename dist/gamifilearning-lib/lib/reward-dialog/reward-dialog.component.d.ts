import { OnInit } from '@angular/core';
import { GamificationService } from '../shared/gamification.service';
export declare class RewardDialogComponent implements OnInit {
    private gamification;
    data: any;
    trivia: import("rxjs/internal/Observable").Observable<string>;
    thanksPic: import("rxjs/internal/Observable").Observable<{}>;
    moneyPic: import("rxjs/internal/Observable").Observable<{}>;
    total: any;
    constructor(gamification: GamificationService, data: any);
    ngOnInit(): void;
}
