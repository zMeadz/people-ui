import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuplicatesLayoutComponent } from './layouts/duplicates-layout/duplicates-layout.component';
import { EmailCharactersLayoutComponent } from './layouts/email-characters-layout/email-characters-layout.component';
import { PeopleLayoutComponent } from './layouts/people-layout/people-layout.component';

const routes: Routes = [
  {
    path: 'email-character-count',
    component: EmailCharactersLayoutComponent,
  },
  {
    path: 'duplicates',
    component: DuplicatesLayoutComponent,
  },
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
