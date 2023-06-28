import { Injectable } from '@angular/core';
import { user } from '../interfaces/us-interfaces';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

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

  }

  login(Usname: string, pass: string){
    const URL= `${this.baseUrl}/auth`;
    const body= {Usname, pass};
   

  }

  ValidateToken(){
  }
}
