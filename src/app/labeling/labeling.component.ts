import { Component, OnInit } from '@angular/core';
import { CommunicationService, QuestionService } from 'gamifilearning-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-labeling',
  templateUrl: './labeling.component.html',
  styleUrls: ['./labeling.component.scss']
})
export class LabelingComponent implements OnInit {
  // currentInstance = this.communication.loadData().pipe(map(data => data[0]));
  currentInstance = this.question.currentInstance$;
  constructor(
    private communication: CommunicationService,
    private question: QuestionService
  ) {}

  ngOnInit() {}
}
