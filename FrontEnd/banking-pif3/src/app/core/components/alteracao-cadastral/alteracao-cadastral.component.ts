import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/services/user.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alteracao-cadastral',
  templateUrl: './alteracao-cadastral.component.html',
  styleUrls: ['./alteracao-cadastral.component.css']
})
export class AlteracaoCadastralComponent implements OnInit {

 teste = "altera dados teste"


  constructor(private user: UserService, private auth: AuthService) { }

  ngOnInit() {   }


  alteraDados(event){
    event.preventDefault()

      //get values phone, email, password, newPassword, id)
      const target = event.target
      const document = target.querySelector('#telefone').value
      const password = target.querySelector('#password').value
    

    //this.user.putAtualizaCadastro(telefone, email, senha, novaSenha, id).subscribe(data => console.log(data))
        
    }


}
