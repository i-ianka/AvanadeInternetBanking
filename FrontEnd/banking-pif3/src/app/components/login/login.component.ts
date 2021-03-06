import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = 'message';
  results = '';
  e ;

  constructor(private Auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {    
/*       this.http.get('http://localhost:3000/api').subscribe(data => {
        console.log(data);
      }) */
  }

  loginUser(event){
    event.preventDefault()

      const target = event.target
      const document = target.querySelector('#document').value
      const password = target.querySelector('#password').value
     // console.log(document, password)

     this.Auth.recebeDocumento(document)
    
     this.Auth.getToken(document, password).subscribe(data => {       
        if(data.success == true){
          //redirect to admin
          this.router.navigate(['core'])
          this.Auth.setLoggedIn(true, data.token)       
          //localStorage.setItem('token', data.token)
        } else {
          window.alert("erro")
        }
      })
     
    }



}
