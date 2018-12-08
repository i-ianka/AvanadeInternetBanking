import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import {BrowserXhr} from "@angular/http";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token ;
  constructor(private http: HttpClient) { 

    
  }



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
        console.log(json)
        this.token = json; 
        console.log(this.token)

        this.getUserDetails(document, this.token)
      })
      .catch(err => console.log('Deu pau: ', err));
  }

  getUserDetails(document, token){
    console.log('infos user')
   // fetch('https://localhost:3000/api/user/' + document, {
    fetch('http://localhost:3000/api/user/'+document , {
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
