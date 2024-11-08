import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLaboratoryComponent } from './components/add-laboratory/add-laboratory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LabosListComponent } from './components/labos-list/labos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLaboratoryComponent,
    LabosListComponent,
    LabosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Pour formGroup
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
