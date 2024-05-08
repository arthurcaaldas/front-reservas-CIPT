import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { ReservationsListComponent } from '@pages/reservations/list/list.component';
import { ReservationsFormComponent } from '@pages/reservations/form/form.component';

@NgModule({
  declarations: [
    ReservationsListComponent,
    ReservationsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [],
  providers: []
})
export class ReservationsModule {}