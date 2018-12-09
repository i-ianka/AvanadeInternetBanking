import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/user/user.module'; 
import { Iuser } from './user-obs';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
import { Location } from '@angular/common';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import { AuthService } from '../auth.service';

interface myUser {
  success: boolean,
  message: string,
  user: {
      address: {
          street: string,
          number: number,
          complement: string,
          zipcode: number,
          neighborhood: string,
          city: string
      },
      accounts: [
          number
      ],
      _id: string,
      name: string,
      document: number,
      email: string,
      phone: number,
      __v: number
  }
}


@Injectable()

export class UserService {
  url: string = 'http://localhost:3000/api/'
  id: number = 87943071452
  stringToken; 
  
  constructor(private http: HttpClient, private auth: AuthService) {  }


  getApi(){
    return this.http.get<IUser>(this.url);
  }


   

  getUser(document, token): Observable<Iuser>{
    localStorage.setItem('token', token)
    const headers = new HttpHeaders()
        .set('token', token);
    return this.http.get<Iuser>('http://localhost:3000/api/user/'+document, {headers: headers})
  }

 


} 