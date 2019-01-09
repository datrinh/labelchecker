import { Injectable } from '@angular/core';
import { Document, Progress, Answer } from './communication.interfaces';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  getNextDocument(datasetId: string): Observable<Document> {
    // return this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         getNextDocumentToLabel(datasetId: "${datasetId}") {
    //           id,
    //           text
    //         }
    //       }
    //     `
    //   })
    //   .pipe(map((res: any) => res.data.getNextDocumentToLabel));

    // Mock
    return this.http.get<Document>('assets/mock.dataobject.json').pipe(
      map(obj => {
        this.http
          .get<string>('https://icanhazdadjoke.com/', {
            headers: new HttpHeaders({
              Accept: 'application/json'
            })
          })
          .subscribe((quote: any) => {
            obj.text = quote.joke;
          });
        obj.id = Math.floor(Math.random() * 100).toString();
        return obj;
      })
    );
  }

  getProgress(datasetId: string): Observable<Progress> {
    return this.apollo
      .query({
        query: gql`
          {
            getProgress(datasetId: "${datasetId}") {
              total,
              done
            }
          }
        `
      })
      .pipe(map((res: any) => res.data.getProgress));
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
    return of(true);
  }
}
