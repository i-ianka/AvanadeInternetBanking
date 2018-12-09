import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { JwtHelper } from 'angular2-jwt';
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
  private loggedInStatus = false
  documentSalvo ;

  //private loggedInStatus = JSON.parse(localStorage.getItem('LoggedIn') || 'false')

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean, token: string) {
    this.loggedInStatus = value
    this.stringToken = token
   
    localStorage.setItem('token', token)
    localStorage.setItem('loggedIn', 'true')
  }

  recebeDocumento(document: number){
    this.documentSalvo = document
  }

  get docUser(){
    return this.documentSalvo
  }

  get isLoggedIn(){
    return this.loggedInStatus
  
    //return JSON.parse(localStorage.getItem('LoggedIn') || this.loggedInStatus.toString())
  }

  get theToken(){    
    return this.stringToken
  }

  logout(){
    console.log('clicou em sair')
    localStorage.setItem('loggedIn', 'false')
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
  }


  getToken(document, password){   
    return this.http.post<myData>('http://localhost:3000/api/login', {
      document,
      password
    })/* .subscribe(data => console.log(data, "works"))  */
    
  }


}
