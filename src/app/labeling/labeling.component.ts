import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'gamifilearning-lib';
import { map, flatMap } from 'rxjs/operators';
import { CommunicationService } from '../communication/communication.service';
import { Answer } from '../communication/communication.interfaces';

@Component({
  selector: 'app-labeling',
  templateUrl: './labeling.component.html',
  styleUrls: ['./labeling.component.scss']
})
export class LabelingComponent implements OnInit {
  currentInstance;
  questions;
  progress;
  rewards = [
    { icon: 'whatshot', position: 25, unlocked: false },
    { icon: 'whatshot', position: 50, unlocked: false },
    { icon: 'whatshot', position: 75, unlocked: false }
  ];
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
        flatMap(answers => this.communication.saveAnswers(answers)),
        flatMap(_ => this.communication.getNextDocument())
      )
      .subscribe();

    // .subscribe((answers: Answer[]) => {
    //   // answers is initiated with []. Check for it
    //   if (answers.length) {
    //     this.communication.saveAnswers(answers).subscribe(succ => {
    //       this.communication.getNextDocument().subscribe();
    //     });
    //   }
    // });
  }
}
