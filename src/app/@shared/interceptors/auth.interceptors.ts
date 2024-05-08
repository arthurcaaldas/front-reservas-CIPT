import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { API_TOKEN } from '../constants/cookies-key';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _cookieService: CookieService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this._cookieService.get(API_TOKEN);
    const clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${token}`) });
    return next.handle(clonedRequest);
  }
}