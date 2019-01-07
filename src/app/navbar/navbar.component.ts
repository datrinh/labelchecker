import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

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

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigate(['loggedOut']);
  }
}
