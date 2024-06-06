
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { ReservationsListComponent } from '@pages/reservations/list/list.component';
import { RoomsListComponent } from '@pages/rooms/list/list.component';
import { UsersListComponent } from '@pages/users/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reservations',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'reservations',
    component: ReservationsListComponent,
  },
  {
    path: 'rooms',
    component: RoomsListComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
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