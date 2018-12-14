import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'gamifilearning-lib';
import { LabelingComponent } from './labeling/labeling.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'labeling', component: LabelingComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: '/labeling' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
