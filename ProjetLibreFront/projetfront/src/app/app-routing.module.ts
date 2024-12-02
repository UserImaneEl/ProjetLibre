import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabosListComponent } from './components/labos-list/labos-list.component';
import { AuthGuard } from './guards/auth.guard';
import { AddLaboratoryComponent } from './components/add-laboratory/add-laboratory.component';
import { ListAnalyseComponent } from './components/list-analyse/list-analyse.component';
import { AddAnalyseComponent } from './components/add-analyse/add-analyse.component';
import { AnalysisTableComponent } from './components/analysis-table/analysis-table.component';

const routes: Routes = [
  {
    path: 'analyses',
    component: AnalysisTableComponent,
    canActivate: [AuthGuard],
    data: { roles: ['TECHNICIEN'] },
  },
  //{path : "customers", component : CustomersComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
  //{path : "orders", component : OrdersComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
  //{path : "order-details/:id", component : OrderDetailsComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
