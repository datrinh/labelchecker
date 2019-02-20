import { OnInit } from '@angular/core';
export declare class LeaderboardComponent implements OnInit {
    columnsToDisplay: string[];
    users: {
        name: string;
        rank: string;
        score: string;
    }[];
    constructor();
    ngOnInit(): void;
}
