import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

import { AuthRoutingModule } from './auth-routing.module';
import { LoggedGuard } from '@shared/guards/logged.guard';

import { AuthComponent } from './auth.component';

import { SignInComponent } from '@pages/auth/sign-in/sign-in.component';
import { SignOutComponent } from '@pages/auth/sign-out/sign-out.component';
import { SignUpComponent } from '@pages/auth/sign-up/sign-up.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

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
    AuthRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [RouterModule],
  providers: [
    LoggedGuard,
    provideEnvironmentNgxMask(maskConfigFunction)
  ]
})
export class AuthModule {}