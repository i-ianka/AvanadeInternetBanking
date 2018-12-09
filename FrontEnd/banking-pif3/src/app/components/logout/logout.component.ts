import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }
  
  ngOnInit() {       
     

  }
  logoutUser(){
    console.log("logoutUser")
    this.router.navigate(['login'])
    this.auth.setLoggedIn(false, "")  
    this.auth.logout()    
}

}

