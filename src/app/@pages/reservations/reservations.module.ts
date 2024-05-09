import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

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
    MatDialogModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    NgxMatNativeDateModule
  ],
  exports: [],
  providers: [
    importProvidersFrom(MatNativeDateModule)
  ]
})
export class ReservationsModule {}