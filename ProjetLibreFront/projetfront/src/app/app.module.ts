import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLaboratoryComponent } from './components/add-laboratory/add-laboratory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LabosListComponent } from './components/labos-list/labos-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { AddAnalyseComponent } from './components/add-analyse/add-analyse.component';
import { ListAnalyseComponent } from './components/list-analyse/list-analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLaboratoryComponent,
    LabosListComponent,
    LabosListComponent,
    LoginComponent,
    AddAnalyseComponent,
    ListAnalyseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Pour formGroup
    HttpClientModule,

    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,

    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
