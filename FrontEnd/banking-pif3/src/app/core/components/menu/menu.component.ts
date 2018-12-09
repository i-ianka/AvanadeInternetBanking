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

  chaveToken;
  numbDocument;
  userVar ;
  ngOnInit() {
      
  }

         
            
  }

  


