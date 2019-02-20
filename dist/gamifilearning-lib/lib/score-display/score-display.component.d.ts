import { OnInit } from '@angular/core';
import { GamificationService } from '../shared/gamification.service';
export declare class ScoreDisplayComponent implements OnInit {
    gamification: GamificationService;
    constructor(gamification: GamificationService);
    ngOnInit(): void;
}
