import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LabelingComponent } from './labeling/labeling.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedOutComponent } from './logged-out/logged-out.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'labeling', component: LabelingComponent, canActivate: [AuthGuard] },
  { path: 'loggedOut', component: LoggedOutComponent },
  { path: '', pathMatch: 'full', redirectTo: '/labeling' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
