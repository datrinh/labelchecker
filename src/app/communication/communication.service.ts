import { Injectable } from '@angular/core';
import { Document, Progress, Answer } from './communication.interfaces';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private currentDocument = new BehaviorSubject<Document>(null);
  currentDocument$ = this.currentDocument.asObservable();
  mockProgress: Progress = {
    total: 1500,
    done: 99
  };
  constructor(
    private apollo: Apollo,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.init();
  }

  init() {
    this.getNextDocument().subscribe(
      doc => {
        // this.currentDocument.next(doc);
      },
      // Kinda hacky. Logout should be handled
      err => {
        this.auth.logout();
        this.router.navigate(['login']);
      }
    );
  }

  getNextDocument(): Observable<Document> {
    return this.apollo
      .query({
        query: gql`
          {
            getNextDocumentToLabel {
              id
              text
            }
          }
        `
      })
      .pipe(
        map((res: any) => {
          const nextDoc = {
            id: res.data.getNextDocumentToLabel.id,
            text: res.data.getNextDocumentToLabel.text
          };
          this.currentDocument.next(nextDoc);
          return nextDoc;
        })
      );

    // Mock
    // return this.http
    //   .get<string>('https://icanhazdadjoke.com/', {
    //     headers: new HttpHeaders({
    //       Accept: 'application/json'
    //     })
    //   })
    //   .pipe(
    //     map((res: any) => {
    //       const nextDoc = {
    //         id: Math.floor(Math.random() * 100).toString(),
    //         text: res.joke
    //       };
    //       this.currentDocument.next(nextDoc);
    //       return nextDoc;
    //     })
    //   );
  }

  getProgress(): Observable<Progress> {
    return this.apollo
      .query({
        query: gql`
          {
            getProgress {
              total
              done
            }
          }
        `
      })
      .pipe(map((res: any) => res.data.getProgress));

    // Mock
    // return of(this.mockProgress);
  }

  getQuestionIds(): Observable<string[]> {
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getQuestionIds
    //       }
    //     `
    //   })
    //   .pipe(map((res: any) => res.data));

    // Mock
    return of(['isMusic', 'isMovie', 'isEvent']);
  }

  getAnswers(): Observable<string[]> {
    // return of(['yes', 'maybe', 'no']);
    // return of(['1', '2', '3', '4', '5']);
    return of([
      'Trifft nicht zu',
      'Trifft eher nicht zu',
      'Weiß nicht',
      'Trifft eher zu',
      'Trifft zu'
    ]);
  }

  saveAnswers(answers: Answer[]): Observable<boolean> {
    if (answers.length) {
      console.log('Sending to backend:', answers);
      return this.apollo.mutate({
        mutation: gql`
          mutation saveDecision($decisions: [DecisionInput]!) {
            saveDecision(decisions: $decisions)
          }
        `,
        variables: {
          decisions: answers
        }
        // optimisticResponse: {
        //   data: {
        //     saveAnswers: true
        //   }
        // }
      });
    } else {
      return of(false);
    }

    // Mock
    //   if (answers.length) {
    //     console.log('Sending to backend:', answers);
    //     return of(true);
    //   } else {
    //     return of(false);
    //   }
  }
}
