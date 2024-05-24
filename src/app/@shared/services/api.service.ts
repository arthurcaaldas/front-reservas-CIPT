import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

import { API_TOKEN } from '../constants/cookies-key';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _api: string = 'http://localhost:3000';

  public get currentUserId() {
    return this._jwt.decodeToken(this._cookieService.get(API_TOKEN))?.id;
  }
  
  constructor(
    private _http: HttpClient,
    private _jwt: JwtHelperService,
    private _cookieService: CookieService) {}
    
    public isAuthenticated(): boolean {
      const token = this._cookieService.get(API_TOKEN);
      if (!token) return false;
      return !this._jwt.isTokenExpired(token);
    }
    
    /**
    * Authentication
    **/
    public auth({ email, password }: { email: string, password: string }): Observable<any> {
      return this._http.post(`${this._api}/auth/authenticate`, { email, password });
    }
    
    /**
    * User CRUD
    **/
    public createUser(payload: any): Observable<any> {
      return this._http.post(`${this._api}/users`, payload);
    }
    
    public getUsers(): Observable<any> {
      return this._http.get(`${this._api}/users`);
    }
    
    public getUser(id: string): Observable<any> {
      return this._http.get(`${this._api}/users/${id}`);
    }
    
    public updateUser(id: string, update: any): Observable<any> {
      return this._http.put(`${this._api}/users/${id}`, update);
    }
    
    public deleteUser(id: string, tokenPass: any): Observable<any> {
      return this._http.delete(`${this._api}/users/${id}`, {body: {tokenPass}});
    }
    
    /**
    * Reservation CRUD
    **/
    public createReservation(payload: any): Observable<any> {
      return this._http.post(`${this._api}/reservations`, payload);
    }
    
    public getReservations(): Observable<any> {
      return this._http.get(`${this._api}/reservations`);
    }
    
    public getReservation(id: string): Observable<any> {
      return this._http.get(`${this._api}/reservations/${id}`);
    }
    
    public updateReservation(id: string, payload: any): Observable<any> {
      return this._http.put(`${this._api}/reservations/${id}`, payload);
    }
    
    public deleteReservation(id: string): Observable<any> {
      return this._http.delete(`${this._api}/reservations/${id}`);
    }
    
    /**
    * Room CRUD
    **/
    public createRoom(payload: any): Observable<any> {
      return this._http.post(`${this._api}/rooms`, payload);
    }
    
    public getRooms(): Observable<any> {
      return this._http.get(`${this._api}/rooms`);
    }
    
    public getRoom(id: string): Observable<any> {
      return this._http.get(`${this._api}/rooms/${id}`);
    }
    
    public updateRoom(id: string, payload: any): Observable<any> {
      return this._http.put(`${this._api}/rooms/${id}`, payload);
    }
    
    public deleteRoom(id: string): Observable<any> {
      return this._http.delete(`${this._api}/rooms/${id}`);
    }
  }