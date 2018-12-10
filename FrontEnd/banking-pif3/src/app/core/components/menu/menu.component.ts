import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  

  constructor(private user: UserService, private auth: AuthService) { }

  teste = "ola mundo"

  chaveToken;
  numbDocument;
  userVar ;
  ngOnInit() {

    this.chaveToken = this.auth.theToken 
    this.numbDocument =  this.auth.documentSalvo 

    this.user.getUser(this.numbDocument, this.chaveToken).subscribe( data => {                
      //this.message = data.message
      this.userVar = data
      console.log('api user', data)
    })
      
  }

         
            
  }

  


