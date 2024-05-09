import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';

import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReservationsModule } from '../../@pages/reservations/reservations.module';
import { RoomsModule } from '@pages/rooms/rooms.module';
import { UsersModule } from '@pages/users/users.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

const modules = [
  MatDialogModule
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ReservationsModule,
    RoomsModule,
    UsersModule,
    ...modules
  ],
  exports: [
    RouterModule,
    ...modules
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfigFunction),
  ]
})
export class DashboardModule {}