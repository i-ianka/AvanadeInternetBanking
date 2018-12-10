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
  valorUsuario
  

  mockDadosUser = [ {
    success: true,
    message: "User founded - Code: 0015",
    user: {
        address: {
            street: "Rua Atilio Manoel Miele",
            number: 38,
            complement: "apto 501",
            zipcode: "09781360",
            neighborhood: "Jardim Irajá",
            city: "São Bernardo do Campo"
        },
        accounts: [
            "5c0af31347222860809fe84b"
        ],
        _id: "5c0af31347222860809fe84a",
        name: "Fábio Silva",
        document: "37498809800",
        email: "fabio.silva-ti@hotmail.com",
        phone: "1125646309",
        __v: 0
    }
}
]

frase = "olaMundo pega"

  constructor(private user: UserService, private auth: AuthService) { }

  ngOnInit() {
    
    
        //console.log('token pelo serviço:   ' + this.auth.theToken)
        this.chaveToken = this.auth.theToken 
        sessionStorage.setItem('token', this.chaveToken)
        localStorage.setItem('token' , this.chaveToken )
        this.numbDocument =  this.auth.documentSalvo 
        sessionStorage.setItem('document', this.numbDocument)
        
      // console.log('document pelo serviço:  ' + this.auth.documentSalvo )

        this.user.getUser(this.numbDocument, this.chaveToken).subscribe( data => {                
          //this.message = data.message
          this.valorUsuario = data
          console.log(data.user)

        })
  }

}
