import { Injectable } from '@angular/core';
import { Document, Progress, Answer } from './communication.interfaces';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private currentDocument = new BehaviorSubject<Document>(null);
  currentDocument$ = this.currentDocument.asObservable();
  mockProgress: Progress = {
    total: 10,
    done: 2
  };
  constructor(private apollo: Apollo, private http: HttpClient) {
    this.init();
  }

  init() {
    this.getNextDocument().subscribe(doc => {
      this.currentDocument.next(doc);
    });
  }

  getNextDocument(): Observable<Document> {
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getNextDocumentToLabel() {
    //           id,
    //           text
    //         }
    //       }
    //     `
    //   })
    //   .pipe(map((res: any) => res.data.getNextDocumentToLabel));

    // Mock
    return this.http
      .get<string>('https://icanhazdadjoke.com/', {
        headers: new HttpHeaders({
          Accept: 'application/json'
        })
      })
      .pipe(
        map((res: any) => {
          const nextDoc = {
            id: Math.floor(Math.random() * 100).toString(),
            text: res.joke
          };
          this.currentDocument.next(nextDoc);
          return nextDoc;
        })
      );
  }

  getProgress(): Observable<Progress> {
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getProgress() {
    //           total,
    //           done
    //         }
    //       }
    //     `
    //   })
    //   .pipe(map((res: any) => res.data.getProgress));

    // Mock
    return of(this.mockProgress);
  }

  getQuestionIds(): Observable<string[]> {
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getQuestionIds()
    //       }
    //     `
    //   })
    //   .pipe(map((res: any) => res.data.getQuestionIds));

    // Mock
    return of(['isMusic', 'isEvent']);
  }

  getAnswers(): Observable<string[]> {
    return of(['yes', 'maybe', 'no']);
  }

  saveAnswers(answers: Answer[]): Observable<boolean> {
    // return this.apollo.mutate({
    //   mutation: gql`
    //       {
    //         saveDecision(decisions: "${answers}")
    //       }
    //     `
    //   // TODO: review
    //   // optimisticResponse: {
    //   //   data: {
    //   //     saveAnswers: true
    //   //   }
    //   // }
    // });

    // Mock
    if (answers.length) {
      console.log('Sending to backend:', answers);
      return of(true);
    } else {
      return of(false);
    }
  }
}
