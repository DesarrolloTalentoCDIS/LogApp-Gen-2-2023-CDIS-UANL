import { Injectable } from '@angular/core';
import { enviroments } from 'src/enviroments/enviroments';
import { user } from '../interfaces/us-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = enviroments.baseUrl;
  private _user!: user;

  get user(){
    return {...this._user};
  }


  constructor(private http: HttpClient) { }
}
