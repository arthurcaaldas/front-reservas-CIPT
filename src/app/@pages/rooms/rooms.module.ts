import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { RoomsListComponent } from '@pages/rooms/list/list.component';
import { RoomsFormComponent } from '@pages/rooms/form/form.component';

@NgModule({
  declarations: [
    RoomsListComponent,
    RoomsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [],
  providers: []
})
export class RoomsModule {}