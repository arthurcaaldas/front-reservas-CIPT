import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoggedGuard } from '@shared/guards/logged.guard';

import { AuthComponent } from './auth.component';

import { SignInComponent } from '@pages/auth/sign-in/sign-in.component';
import { SignOutComponent } from '@pages/auth/sign-out/sign-out.component';
import { SignUpComponent } from '@pages/auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent
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