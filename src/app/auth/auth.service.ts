import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { User } from '../communication/communication.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private apollo: Apollo) {}

  login(username: string, password: string): Observable<User> {
    return this.apollo
      .query({
        query: gql`
          {
            login(username: "${username}", password: "${password}") {
              id,
              firstName,
              lastName,
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
          this.user = res.data.login;
          this.doLogin(this.user);
          return this.user;
        })
      );
  }

  logout(): void {
    // this.apollo
    //   .query({
    //     query: gql`
    //       {
    //         logout
    //       }
    //     `
    //   })
    //   .subscribe(
    //     _ => {
    //       // TODO: Logout throws error when token expired?
    //       this.doLogout();
    //     },
    //     err => {
    //       console.error(err);
    //       // logout when expired too;
    //       this.doLogout();
    //     }
    //   );
  }

  getCurrentUserId(): string | number | null {
    return this.user.id || window.localStorage.getItem('userId') || null;
  }

  isLogged(): boolean {
    return window.localStorage.getItem('token') ? true : false;
  }

  private doLogin(user: User) {
    window.localStorage.setItem('token', user.jwtToken.token);
    window.localStorage.setItem('userId', user.id.toString());
  }

  private doLogout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
  }
}
