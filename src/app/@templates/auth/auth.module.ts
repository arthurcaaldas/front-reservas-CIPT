import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { LogInComponent } from '../../@pages/log-in/log-in.component';

import { AuthRoutingModule } from './auth-routing.module';
import { LoggedGuard } from '../../shared/guards/logged.guard';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [RouterModule],
  providers: [LoggedGuard]
})
export class AuthModule {}