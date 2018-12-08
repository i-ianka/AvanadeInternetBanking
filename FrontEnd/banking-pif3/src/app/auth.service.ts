import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

    
  }

  getUserDetails(document, password){
    //post these details on API server
    return this.http.post('http://localhost:3000/api/login', {
      document,
      password
      
    }).subscribe( data => {
      //console.log(data, "servidor")
      
    })
 
  }


  loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log (this.responseText);
      }
    };
    xhttp.open("GET", "http://localhost:3000/api", true);
    xhttp.send();
  }

}
