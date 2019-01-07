import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const MESLISPW =
  '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
export const MESLISUSER = 'test';

export interface User {
  id: number;
  username: string;
  jwtToken: { token: string };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSpinner = false;
  user: User;
  username = MESLISUSER;
  password = MESLISPW;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.showSpinner = true;
    this.auth.login(this.username, this.password).subscribe(
      res => {
        this.showSpinner = false;
        this.router.navigate(['/labeling']);
      },
      err => {
        this.showSpinner = false;
        this.password = '';
        console.log('err');
      }
    );
  }
}
