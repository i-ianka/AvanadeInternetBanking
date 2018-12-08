import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import {BrowserXhr} from "@angular/http";
import { tokenKey } from '@angular/core/src/view';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token ;
  constructor(private http: HttpClient) { 

    
  }



  getToken(document, password){

    //post these details on API server
     return [
      {
        "success": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMGFmMzEzNDcyMjI4NjA4MDlmZTg0YSIsImlhdCI6MTU0NDI4NzkxMCwiZXhwIjoxNTQ0Mjg4NTEwfQ.4-WQhyqWVnDEAfXs-Wr_ohZDKIA8NeybDzv8JWVAyfI"
      }
     ] 
     // return this.http.post('https://localhost:3000/api', {document: document, password: password} )

  /*     const myheader = new HttpHeaders().set('Content-Type', 'localhost:3000/api')
      let body = new HttpParams();
      body = body.set('document', document);
      body = body.set('password', password);
      return this.http.post('/login', body)  */
      
      
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
