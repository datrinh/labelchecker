import { Component, OnInit } from '@angular/core';
import {
  CommunicationService,
  QUESTIONS,
  QuestionService
} from 'gamifilearning-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-labeling',
  templateUrl: './labeling.component.html',
  styleUrls: ['./labeling.component.scss']
})
export class LabelingComponent implements OnInit {
  // currentInstance = this.communication.loadData().pipe(map(data => data[0]));
  // questions = QUESTIONS;
  currentInstance = this.question.currentInstance$;
  constructor(
    private communication: CommunicationService,
    public question: QuestionService
  ) {}

  ngOnInit() {}
}
