import { Component, OnInit } from '@angular/core';
import { GamificationService } from 'gamifilearning-lib';

@Component({
  selector: 'app-reward-dialog',
  templateUrl: './reward-dialog.component.html',
  styleUrls: ['./reward-dialog.component.scss']
})
export class RewardDialogComponent implements OnInit {
  trivia = this.gamification.getTrivia();
  pic = this.gamification.getRandomGif('thanks');
  constructor(private gamification: GamificationService) {}

  ngOnInit() {
    this.pic.subscribe(res => console.log(res));
  }
}
