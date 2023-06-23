import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/envieroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = enviroment.baseUrl;

  constructor() { }

  
}
