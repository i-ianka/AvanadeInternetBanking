import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import {BrowserXhr} from "@angular/http";
import { TokenService } from './services/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token ;
  constructor(private http: HttpClient, private _tokenService: TokenService) { }

  getToken(document, password){
    //post these details on API server
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify({
          //document: 'peter@klaven',
          //'peter@klaven' cityslicka
          document: document,
          password: password          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json =>  {
        console.log('JSON: ', json.token);
        this.token = json.token;
        console.log('Token pego da resposta da requisicao: ', this.token);
        this._tokenService.setToken(this.token);
        this.getUserDetails(document, this.token)
        this._tokenService.showToken();
      })
      .catch(err => console.log('An error occurred during the login: ', err));
  }

  getUserDetails(document, token){
    console.log('infos user')
   // fetch('https://localhost:3000/api/user/' + document, {
    fetch('http://localhost:3000/api/user/'+document , {
      method: 'GET',      
      headers: {
        "token": token
      }
    })
    .then(response => response.json())
    .then(json =>  console.log('Usuario: ', json));
  }
/*   loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log (this.responseText);
      }
    };
    xhttp.open("GET", "http://localhost:3000/api", true);
    xhttp.send();
  } */
}
