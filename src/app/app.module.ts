import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AuthInterceptor } from './shared/interceptors/auth.interceptors';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JwtHelperService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
