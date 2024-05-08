import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { API_TOKEN } from '@shared/constants/cookies-key';

@Component({
  selector: 'oxe-sign-out',
  template: '',
})
export class SignOutComponent {
  constructor (
    private _cookieService: CookieService,
    private _router: Router) {}

  ngOnInit(): void {
    this._cookieService.delete(API_TOKEN);
    this._router.navigate(['/']);
  }
}
