import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleLayoutComponent } from './layouts/people-layout/people-layout.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleLayoutComponent,
  },
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
