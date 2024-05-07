import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReservationsModule } from '../../@pages/reservations/reservations.module';

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
    MatDialogModule
  ],
  exports: [
    RouterModule,
    MatDialogModule
  ],
  providers: []
})
export class DashboardModule {}