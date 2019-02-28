import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from 'gamifilearning-lib';
import { map, flatMap } from 'rxjs/operators';
import { CommunicationService } from '../communication/communication.service';
import { Answer } from '../communication/communication.interfaces';
import { REWARDS } from './rewards';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-labeling',
  templateUrl: './labeling.component.html',
  styleUrls: ['./labeling.component.scss']
})
export class LabelingComponent implements OnInit, OnDestroy {
  currentInstance;
  questions;
  progress;
  rewards = REWARDS;
  answers;
  sub;
  constructor(
    private communication: CommunicationService,
    private question: QuestionService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.currentInstance = this.communication.currentDocument$;
    this.questions = this.communication.getQuestionIds();
    this.progress = this.communication.getProgress();
    this.answers = this.communication.getAnswers();

    this.sub = this.question.answers$
      .pipe(
        flatMap((answers: Answer[]) => this.communication.saveAnswers(answers)),
        flatMap(_ => this.communication.getNextDocument())
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
