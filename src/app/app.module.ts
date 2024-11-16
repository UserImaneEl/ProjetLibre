import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLaboratoryComponent } from './components/Laboratory-service/add-laboratory/add-laboratory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LabosListComponent } from './components/Laboratory-service/labos-list/labos-list.component';
import { EditLaboComponent } from './components/Laboratory-service/edit-labo/edit-labo.component';
import { RouterModule } from '@angular/router';
import { AddAddressComponent } from './components/Addresse-service/add-address/add-address.component';
import { ListAdressesComponent } from './components/Addresse-service/list-adresses/list-adresses.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { EditAddresseComponent } from './components/Addresse-service/edit-addresse/edit-addresse.component';
import { AddAnalyseComponent } from './components/Analyse-service/add-analyse/add-analyse.component';
import { ListAnalyseComponent } from './components/Analyse-service/list-analyse/list-analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLaboratoryComponent,
    EditLaboComponent,
    LabosListComponent,
    AddAddressComponent,
    ListAdressesComponent,
    MainLayoutComponent,
    EditAddresseComponent,
    AddAnalyseComponent,
    ListAnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
