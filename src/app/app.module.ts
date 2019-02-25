import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GLModule } from 'gamifilearning-lib';
import { GraphQLModule } from './graphql.module';
import { LabelingComponent } from './labeling/labeling.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatBadgeModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { HelpComponent } from './help/help.component';
import { BlockedDialogComponent } from './blocked-dialog/blocked-dialog.component';
import { CoffeeComponent } from './coffee/coffee.component';

const MaterialModules = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatBadgeModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    AppComponent,
    LabelingComponent,
    LoginComponent,
    NavbarComponent,
    LoggedOutComponent,
    HelpComponent,
    BlockedDialogComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GLModule,
    GraphQLModule,
    MaterialModules,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelpComponent]
})
export class AppModule {}
