import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { LoginModule } from '../model/login/login.module';
import { ILogin } from './login-obs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) {  }

  getLogin() : Observable<ILogin>{
    return this.http.get<ILogin>(this.url);
  }
    
    postLogin(document: number, password:string){
      
      return this.http.post(this.url + "login" , document ).toPromise()
    }
/* 
    OnSubmit(userName,password){
      this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
       localStorage.setItem('userToken',data.access_token);
       this.router.navigate(['/home']);
     },
     (err : HttpErrorResponse)=>{
       this.isLoginError = true;
     });
   } */
/*     return [
      { 
        "success": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMGFmMzEzNDcyMjI4NjA4MDlmZTg0YSIsImlhdCI6MTU0NDI0Mjg5NywiZXhwIjoxNTQ0MjQzNDk3fQ.S6eIT707zsmBKJ0xkUoBRPXRs2xSaqXz0R7eS_Pvo1c"
      }
    ] */
  }

/*   getLogin(document: number, password: number){
    document = 87943071452;
    password = 417810;
         requ est.headers.set('x-access-token', `${token}`); 
    request.headers.set('Content-Type', 'application/json'); 
    
    return this.http.get<LoginModule>(this.url + `login/${document}`).toPromise()
  } */


