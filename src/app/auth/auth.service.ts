import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { User } from '../communication/communication.interfaces';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private apollo: Apollo) {}

  login(username: string, password: string): Observable<User> {
    const response = this.apollo
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
          // console.log(res);
          this.user = res.data.login;
          this.doLogin(this.user);
          return this.user;
        })
      );
    return response;
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
