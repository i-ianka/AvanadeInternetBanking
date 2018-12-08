import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { LoginModule } from '../model/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) {  }

  getLogin(document: number, password: number){
    document = 87943071452;
    password = 417810;
/*     request.headers.set('x-access-token', `${token}`); 
    request.headers.set('Content-Type', 'application/json'); */

    return this.http.get<LoginModule>(this.url + `login/${document}`).toPromise()
  }

}
