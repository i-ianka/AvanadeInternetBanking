import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admine',
  templateUrl: './admine.component.html',
  styleUrls: ['./admine.component.css']
})
export class AdmineComponent implements OnInit {
  chaveToken 
  pegaDados: any 
  numbDocument

  
  constructor(private user: UserService, private auth: AuthService, http: HttpClient) { }

  ngOnInit() { 
    this.ajeitaDados()
  }

  ajeitaDados(){
            //console.log('token pelo serviço:   ' + this.auth.theToken)
            this.chaveToken = this.auth.theToken 
            this.numbDocument =  this.auth.documentSalvo      
           
         // console.log('document pelo serviço:  ' + this.auth.documentSalvo )

           return this.user.getUser(this.numbDocument, this.chaveToken).subscribe( data => {
              this.pegaDados = data.user.name
              console.log(data)
           })
           console.log(this.pegaDados)
           
  }
}
