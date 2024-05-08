
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationsListComponent } from '../../@pages/reservations/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reservations',
  },
  {
    path: 'reservations',
    component: ReservationsListComponent,
  },
  {
    path: '**',
    redirectTo: 'reservations',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}