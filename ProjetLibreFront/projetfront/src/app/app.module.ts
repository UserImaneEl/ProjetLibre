import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLaboratoryComponent } from './components/add-laboratory/add-laboratory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LabosListComponent } from './components/labos-list/labos-list.component';
import { LoginComponent } from './components/login/login.component';
import { AddAnalyseComponent } from './components/add-analyse/add-analyse.component';
import { ListAnalyseComponent } from './components/list-analyse/list-analyse.component';
import { AddContactComponent } from './components/contact-service/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLaboratoryComponent,
    LabosListComponent,
    LabosListComponent,
    LoginComponent,
    AddAnalyseComponent,
    ListAnalyseComponent,
    AddContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Pour formGroup
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
