import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleLayoutComponent } from './layouts/people-layout/people-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ButtonComponent } from './components/button/button.component';
import { EmailCharactersLayoutComponent } from './layouts/email-characters-layout/email-characters-layout.component';
import { DuplicatesLayoutComponent } from './layouts/duplicates-layout/duplicates-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PeopleLayoutComponent,
    TopBarComponent,
    DataTableComponent,
    ButtonComponent,
    EmailCharactersLayoutComponent,
    DuplicatesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
