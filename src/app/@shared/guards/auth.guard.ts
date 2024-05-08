import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

@Injectable()
export class AuthGuard {
  constructor(
    private _router: Router,
    private _api: ApiService) {}

  canActivate(): boolean {
    if (!this._api.isAuthenticated()) {
      this._router.navigate(['/auth']);
      return false;
    }
  
    return true;
  }
}