import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import sjcl from 'sjcl';
import { MatDialog } from '@angular/material';
import { HelpComponent } from '../help/help.component';

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
  username = '';
  password = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    if (!this.auth.isLogged()) {
      setTimeout(() => this.openHelpPage());
    }
  }

  login() {
    this.showSpinner = true;
    this.auth
      .login(this.username, this.generateSha256(this.password))
      .subscribe(
        res => {
          this.showSpinner = false;
          this.router.navigate(['/labeling']);
        },
        err => {
          this.showSpinner = false;
          this.password = '';
          console.error(err);
        }
      );
  }

  openHelpPage() {
    this.dialog.open(HelpComponent, {
      height: '80%',
      width: '80%'
    });
  }

  private generateSha256(input) {
    if (input === null) {
      return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    }

    const hash = sjcl.hash.sha256.hash(input);
    const output = sjcl.codec.hex.fromBits(hash);

    return output;
  }
}
