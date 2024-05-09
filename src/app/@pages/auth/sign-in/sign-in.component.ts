import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '@shared/services/api.service';

import { API_TOKEN } from '@shared/constants/cookies-key';

@Component({
  selector: 'oxe-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  public form: FormGroup;

  constructor (
    private _fb: FormBuilder,
    private _api: ApiService,
    private _cookieService: CookieService,
    private _router: Router) {
    this.form = this._fb.group({
      email: ['', [Validators.minLength(6)]],
      password: ['', [Validators.minLength(6), Validators.maxLength(8)]]
    }); 
  }

  public handleSubmit () {
    this._api.auth(this.form.value)
      .subscribe({
        next: ({ token }) => {
          this._cookieService.set(API_TOKEN, token, 1, '/');
          this._router.navigate(['/']);
        },
        error: ({ error }) => alert(error.message),
      })
  }
}
