import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'gamifilearning-lib';
import { map } from 'rxjs/operators';
import { CommunicationService } from '../communication/communication.service';
import { Answer } from '../communication/communication.interfaces';

@Component({
  selector: 'app-labeling',
  templateUrl: './labeling.component.html',
  styleUrls: ['./labeling.component.scss']
})
export class LabelingComponent implements OnInit {
  // currentInstance = this.communication.loadData().pipe(map(data => data[0]));
  // currentInstance = this.question.currentInstance$;
  currentInstance;
  questions;
  constructor(
    private communication: CommunicationService,
    private question: QuestionService
  ) {}

  ngOnInit() {
    this.currentInstance = this.communication.getNextDocument('1');
    this.questions = this.communication.getQuestionIds();

    this.question.answers$.subscribe((answers: Answer[]) => {
      this.communication.saveAnswers(answers).subscribe(succ => {
        this.currentInstance = this.communication.getNextDocument('1');
      });
    });
  }
}
