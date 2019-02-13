import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    if (!this.auth.isLogged()) {
      setTimeout(() => this.openHelpPage());
    }
  }

  openHelpPage() {
    this.dialog.open(HelpComponent, {
      height: '80%',
      width: '80%'
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['loggedOut']);
  }
}
