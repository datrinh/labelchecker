import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'gamifilearning-lib';
import { map, flatMap } from 'rxjs/operators';
import { CommunicationService } from '../communication/communication.service';
import { Answer } from '../communication/communication.interfaces';
import { REWARDS } from './rewards';

@Component({
  selector: 'app-labeling',
  templateUrl: './labeling.component.html',
  styleUrls: ['./labeling.component.scss']
})
export class LabelingComponent implements OnInit {
  currentInstance;
  questions;
  progress;
  rewards = REWARDS;
  answers;
  constructor(
    private communication: CommunicationService,
    private question: QuestionService
  ) {}

  ngOnInit() {
    this.currentInstance = this.communication.currentDocument$;
    this.questions = this.communication.getQuestionIds();
    this.progress = this.communication.getProgress();
    this.answers = this.communication.getAnswers();

    this.question.answers$
      .pipe(
        flatMap((answers: Answer[]) => this.communication.saveAnswers(answers)),
        flatMap(_ => this.communication.getNextDocument())
      )
      .subscribe();
  }
}
