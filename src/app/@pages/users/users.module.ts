import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { UsersListComponent } from '@pages/users/list/list.component';
import { UsersFormComponent } from '@pages/users/form/form.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [],
  providers: []
})
export class UsersModule {}