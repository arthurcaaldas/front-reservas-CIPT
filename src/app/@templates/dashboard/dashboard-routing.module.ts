
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationsListComponent } from '../../@pages/reservations/list/list.component';
import { ReservationsFormComponent } from '../../@pages/reservations/form/form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reservas',
  },
  {
    path: 'reservas',
    component: ReservationsListComponent,
  },
  {
    path: 'reservas/:id',
    component: ReservationsFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}