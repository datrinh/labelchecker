import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

export interface User {
  id: number;
  username: string;
  jwtToken: {
    token: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private apollo: Apollo, private router: Router) {}

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
          window.localStorage.setItem('token', this.user.jwtToken.token);
          window.localStorage.setItem('userId', this.user.id.toString());
          return this.user;
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
          // Logout throws error when token expired?
          window.localStorage.removeItem('token');
        },
        err => {
          console.error(err);
          // window.localStorage.removeItem('token');
        }
      );
  }

  getCurrentUserId() {
    return this.user.id || window.localStorage.getItem('userId') || null;
  }

  isLogged(): boolean {
    return window.localStorage.getItem('token') ? true : false;
  }
}
