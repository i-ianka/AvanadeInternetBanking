import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import {BrowserXhr} from "@angular/http";
import { tokenKey } from '@angular/core/src/view';

interface myData {
  success: boolean,
  token: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  stringToken = '' ;
  loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean, token: string) {
    this.loggedInStatus = value
    this.stringToken = token
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  getToken(document, password){
    return this.http.post<myData>('http://localhost:3000/api/login', {
      document,
      password
    })/* .subscribe(data => console.log(data, "works"))  */
  }
 
    
  
  
 
  getUserDetails(document, token){
    console.log('infos user')
   // fetch('https://localhost:3000/api/user/' + document, {
    fetch('https://reqres.in/api/users/2' , {
      method: 'GET',      
      headers: {
        "token": token.token
      }
    })
    .then(response => response.json())
    .then(json =>  {
      console.log(json)
      console.log('token aqui' +token.token)
    }
      )
  }

}
