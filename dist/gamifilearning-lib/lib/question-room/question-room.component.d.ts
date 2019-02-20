import { OnInit, OnChanges } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { MatSelectionList } from '@angular/material/list';
import { GamificationService } from '../shared/gamification.service';
import { Answer } from '../shared/data.interface';
import { MatDialog, MatSnackBar } from '@angular/material';
export interface Reward {
    position: number;
    unlocked: boolean;
    icon: string;
}
export declare class QuestionRoomComponent implements OnInit, OnChanges {
    private question;
    private gamification;
    private dialog;
    private snack;
    currentQuestion: number;
    tempAnswers: Answer[];
    lockedRewards: any;
    maxProgress: number;
    done: number;
    currentInstance: any;
    rewards: Reward[];
    questions: string[];
    answers: string[];
    showProgressbar: boolean;
    answerMode: string;
    selection: MatSelectionList;
    constructor(question: QuestionService, gamification: GamificationService, dialog: MatDialog, snack: MatSnackBar);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    isDone(): boolean;
    sendAnswer(answer: string): void;
    claimReward(reward: any): void;
    /**
     * Handle keyboard interaction
     * Only working hardcoded for binary atm
     */
    onKey(event: KeyboardEvent): boolean;
    private createAnswer;
    private updateRewards;
    private doUpdateRewards;
    submitAnswer(answer: string): void;
    mockAchievementCheck(): void;
}
