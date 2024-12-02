import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLaboratoryComponent } from './components/add-laboratory/add-laboratory.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { LabosListComponent } from './components/labos-list/labos-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { AddAnalyseComponent } from './components/add-analyse/add-analyse.component';
import { ListAnalyseComponent } from './components/list-analyse/list-analyse.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnalysisTableComponent } from './components/analysis-table/analysis-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAnalyseComponent } from './components/edit-analyse/edit-analyse.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak
      .init({
        config: {
          url: 'http://localhost:8080',
          realm: 'labo-realm',
          clientId: 'projetfront',
        },
        initOptions: {
          onLoad: 'login-required', // Changer 'check-sso' par 'login-required'
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
        },
      })
      .then(() => console.log('Keycloak initialized'))
      .catch((err) => console.error('Keycloak initialization failed', err));
}

@NgModule({
  declarations: [
    AppComponent,
    AddLaboratoryComponent,
    LabosListComponent,
    SideBarComponent,
    LoginComponent,
    AddAnalyseComponent,
    ListAnalyseComponent,
    AnalysisTableComponent,
    EditAnalyseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule, // Pour formGroup
    HttpClientModule,
    KeycloakAngularModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,

    MatSelectModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
