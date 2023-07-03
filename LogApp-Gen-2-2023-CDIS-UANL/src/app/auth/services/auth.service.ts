import { Injectable } from '@angular/core';
import { user } from '../interfaces/us-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { AuthResponse } from '../interfaces/rest-interfaces';
import {  Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = enviroment.baseUrl;
  private _user!: user;

  get user(){
    return {...this._user};
  }

  constructor(private http: HttpClient) { }

  register(Usname: string, id: string, pass: string){
    const URL= `${this.baseUrl}/auth/new`;
    const body= {Usname, id, pass}; 
    
   
    return this.http.post<AuthResponse>(URL, body).pipe(
      tap(res =>{
        if(res.ok){
          localStorage.setItem('token', res.token!);
          this._user={
            id: res.id!,
            usname: res.usname!
          }
        }
      }),
      map(res => res.ok),
      catchError(err => of(err.error.message))
    )

  }

  login(id: string, pass: string){
    const URL= `${this.baseUrl}/auth`;
    const body= {id, pass};
   
    return this.http.post<AuthResponse>(URL, body).pipe(
      tap(res =>{
        if(res.ok){
          localStorage.setItem('token', res.token!);
          this._user={
            id: res.id!,
            usname: res.usname!
          }
        }
      }),
      map(res => res.ok),
      catchError(err => of(err.error.message))
    )
  }

  ValidateToken(): Observable<boolean> {
    const URL= `${this.baseUrl}/auth/api/renew`;
    const headers= new HttpHeaders().set('apikey', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(URL, {headers}).pipe(
    map(res =>{
     localStorage.setItem('token', res.token!);
     this._user={
        id: res.id!,
        usname: res.usname!
     }
     return res.ok
    }),
    catchError(e => of(false))
   )  
  }
 
}
