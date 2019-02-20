import { OnInit } from '@angular/core';
import { GamificationService } from '../shared/gamification.service';
import { UserService } from '../shared/user.service';
export declare class NavbarComponent implements OnInit {
    user: UserService;
    private gamificationService;
    gamification: GamificationService;
    constructor(user: UserService, gamificationService: GamificationService);
    ngOnInit(): void;
}
