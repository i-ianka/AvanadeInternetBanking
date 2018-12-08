import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = 'message';
  results = '';


  constructor(private Auth: AuthService, private http: HttpClient) { }

  ngOnInit() {    
      this.http.get('http://localhost:3000/api').subscribe(data => {
        console.log(data);
      })
/*       this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      console.log(data);
    }) */
  }

  loginUser(event){
    event.preventDefault()

    const target = event.target
    const document = target.querySelector('#document').value
    const password = target.querySelector('#password').value
    this.Auth.getToken(document, password)
  }
}
