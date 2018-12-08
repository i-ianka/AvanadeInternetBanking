import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admine',
  templateUrl: './admine.component.html',
  styleUrls: ['./admine.component.css']
})
export class AdmineComponent implements OnInit {
  chaveToken 
  numbDocument
    message = "Loading..."
  constructor(private user: UserService, private auth: AuthService) { }

  ngOnInit() {
    
    //console.log('token pelo serviço:   ' + this.auth.theToken)
    this.chaveToken = this.auth.theToken 
    this.numbDocument =  this.auth.documentSalvo 
   // console.log('document pelo serviço:  ' + this.auth.documentSalvo )

    this.user.getUser(this.numbDocument, this.chaveToken).subscribe( data => {
      this.message = data.message
      console.log(data.user)
    })
  }

}
