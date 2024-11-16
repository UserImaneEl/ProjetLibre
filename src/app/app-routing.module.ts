import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLaboratoryComponent } from './components/Laboratory-service/add-laboratory/add-laboratory.component';
import { EditLaboComponent } from './components/Laboratory-service/edit-labo/edit-labo.component';
import { LabosListComponent } from './components/Laboratory-service/labos-list/labos-list.component';
import { ListAdressesComponent } from './components/Addresse-service/list-adresses/list-adresses.component';
import { AddAddressComponent } from './components/Addresse-service/add-address/add-address.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { EditAddresseComponent } from './components/Addresse-service/edit-addresse/edit-addresse.component';
import { AddAnalyseComponent } from './components/Analyse-service/add-analyse/add-analyse.component';
import { ListAnalyseComponent } from './components/Analyse-service/list-analyse/list-analyse.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'list-labos', component:LabosListComponent},
      { path: 'add-Labo', component: AddLaboratoryComponent },
      { path: 'add-address', component: AddAddressComponent },
      { path: 'list-adress', component: ListAdressesComponent },
      { path: 'edit-address/:id', component:EditAddresseComponent},
      { path: 'edit-labo/:id', component:EditLaboComponent},
      { path: 'add-analyse', component:AddAnalyseComponent},
      { path: 'list-analyses', component:ListAnalyseComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
