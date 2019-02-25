import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable, of, throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { User } from '../communication/communication.interfaces';
import { MatDialog } from '@angular/material';
import { BlockedDialogComponent } from '../blocked-dialog/blocked-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private apollo: Apollo, private dialog: MatDialog) {}

  login(username: string, password: string): Observable<User> {
    return this.apollo
      .query({
        query: gql`
          {
            login(username: "${username}", password: "${password}") {
              id,
              username,
              jwtToken {
                token
              }
            }
          }
        `
      })
      .pipe(
        map((res: any) => {
          console.log(res);
          this.user = res.data.login;
          this.doLogin(this.user);
          return this.user;
          // return throwError(JSON.parse(`{
          //   "headers": { "normalizedNames": {}, "lazyUpdate": null },
          //   "status": 400,
          //   "statusText": "Bad Request",
          //   "url": "http://meslis-test-3.corp.deecoob.com:58192/graphql",
          //   "ok": false,
          //   "name": "HttpErrorResponse",
          //   "message": "Http failure response for http://meslis-test-3.corp.deecoob.com:58192/graphql: 400 Bad Request",
          //   "error": {
          //     "data": { "login": null },
          //     "errors": [
          //       {
          //         "message": "Login is blocked until 02/25/2019 12:07:50",
          //         "extensions": { "code": "Login blocked" }
          //       }
          //     ]
          //   }
          // }`));
        }),
        catchError(err => {
          if (err.error.errors[0].extensions === 'Login blocked') {
            this.dialog.open(BlockedDialogComponent, {
              data: { message: err.error.errors[0].message }
            });
          }
          console.log('Blocked', err);
          return throwError(err);
        })
      );
  }

  logout(): void {
    this.apollo
      .query({
        query: gql`
          {
            logout
          }
        `
      })
      .subscribe(
        _ => {
          // TODO: Logout throws error when token expired?
          this.doLogout();
        },
        err => {
          console.error(err);
          // logout when expired too;
          this.doLogout();
        }
      );
  }

  getUsername(): string | number | null {
    return window.localStorage.getItem('username') || '';
  }

  isLogged(): boolean {
    return window.localStorage.getItem('token') ? true : false;
  }

  private doLogin(user: User) {
    window.localStorage.setItem('token', user.jwtToken.token);
    window.localStorage.setItem('username', user.username.toString());
  }

  private doLogout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
  }
}
