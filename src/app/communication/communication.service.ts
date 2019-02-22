import { Injectable } from '@angular/core';
import { Document, Progress, Answer } from './communication.interfaces';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
  mockData;
  mockCounter = 0;
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
      // Kinda hacky. Logout should be handled somewhere else
      err => {
        this.auth.logout();
        this.router.navigate(['login']);
      }
    );
  }

  getNextDocument(): Observable<Document> {
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getNextDocumentToLabel {
    //           id
    //           text
    //         }
    //       }
    //     `
    //   })
    //   .pipe(
    //     map((res: any) => {
    //       const nextDoc = {
    //         id: res.data.getNextDocumentToLabel.id,
    //         text: res.data.getNextDocumentToLabel.text
    //       };
    //       this.currentDocument.next(nextDoc);
    //       return nextDoc;
    //     })
    //   );
    return this.http.get<Document[]>('assets/mock_data_lc.json').pipe(
      map(res => res[this.mockCounter++]),
      map(res => {
        console.log(res);
        const nextDoc = {
          id: res['articleId'],
          text: res['text']
        };
        this.currentDocument.next(nextDoc);
        return nextDoc;
      })
    );
    //   this.mockData = res.map(obj => {
    //     return {
    //       id: obj['values']['2'],
    //       text: obj['features']['1']['4']
    //     };
    //   });
    // });
    // console.log(this.mockData);
    // return of(this.mockData[0]);

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
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getProgress {
    //           total
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
    //         getQuestionIds
    //       }
    //     `
    //   })
    //   .pipe(map((res: any) => res.data));

    // Mock
    return of(['isMusic']);
  }

  getAnswers(): Observable<string[]> {
    return of(['0', '-1', '1']);
    // return of(['1', '2', '3', '4', '5']);
  }

  saveAnswers(answers: Answer[]): Observable<boolean> {
    if (answers.length) {
      console.log('Sending to backend:', answers);
      const answer: any = answers[0];
      answer.text = this.currentDocument.value.text;
      this.http
        .post('http://127.0.0.1:5000/label', JSON.stringify(answer))
        .subscribe(res => {
          console.log('Backend res:', res);
        });
      // return this.apollo.mutate({
      //   mutation: gql`
      //     mutation saveDecision($decisions: [DecisionInput]!) {
      //       saveDecision(decisions: $decisions)
      //     }
      //   `,
      //   variables: {
      //     decisions: answers
      //   }
      //   // optimisticResponse: {
      //   //   data: {
      //   //     saveAnswers: true
      //   //   }
      //   // }
      // });
      return of(true);
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
