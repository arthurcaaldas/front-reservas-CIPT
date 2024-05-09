import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CustomPaginator } from '@shared/components/customPaginator';

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
    NgxMatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe
  ],
  exports: [],
  providers: [
    importProvidersFrom(MatNativeDateModule),
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class ReservationsModule {}