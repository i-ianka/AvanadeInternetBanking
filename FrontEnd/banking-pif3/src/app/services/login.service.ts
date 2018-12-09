import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { LoginModule } from '../model/login/login.module';
import { ILogin } from './login-obs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) {  }
}
    

