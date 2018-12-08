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




@Injectable()

export class UserService {
  url: string = 'http://localhost:3000/api/'
  id: number = 87943071452

  
  constructor(private http: HttpClient) {  }

  getApi(){
    return this.http.get<IUser>(this.url);
  }
/* 
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.url + '/token', data, { headers: reqHeader });
  }
   */

  getUser(): Observable<Iuser>{

    return this.http.get<Iuser>(this.url+"user/87943071452");

/*     return[
      {
        "success": true,
        "message": "User founded - Code: 0015",
        "user": {
            "address": {
                "street": "Rua da Paloma",
                "number": 3,
                "complement": "apto 302",
                "zipcode": "56785900",
                "neighborhood": "Vila Mariana",
                "city": "São Paulo"
            },
            "accounts": [
                "5c0af31347222860809fe85a"
            ],
            "_id": "5c0af31347222860809fe859",
            "name": "Paloma Adolfi",
            "document": "87943071452",
            "email": "paloma.adolfi@hotmail.com",
            "phone": "11987630980",
            "__v": 0
        }
    }

    ] */


  }
} 