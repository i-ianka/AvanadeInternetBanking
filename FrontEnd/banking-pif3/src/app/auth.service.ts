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
  documentSalvo ;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean, token: string) {
    this.loggedInStatus = value
    this.stringToken = token
  }

  recebeDocumento(document: number){
    this.documentSalvo = document
  }

  get docUser(){
    return this.documentSalvo
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  get theToken(){    
    return this.stringToken
  }



  getToken(document, password){
   
    return this.http.post<myData>('http://localhost:3000/api/login', {
      document,
      password
    })/* .subscribe(data => console.log(data, "works"))  */
    
  }


}
