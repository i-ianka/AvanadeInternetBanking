import { Component, OnInit } from '@angular/core';
import { IUser, Iapi } from '../../model/user/user.module'; 
import { UserService } from '../../services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {
  myApi: Iapi;

  public login ;
  public conta = [];
  public user;

  constructor(
      private userService: UserService,
      private contaService: ContaService, 
      private loginService: LoginService) { }


  ngOnInit() {

     this.loginService.getLogin()
        .subscribe(data => this.login = data);
     console.log(this.login);


    this.conta = this.contaService.getConta()
    console.log(this.conta);

    this.user = this.userService.getApi()
       // .subscribe(data => this.user = data)
    console.log(this.user);




/*     this.userService.getApi()
    .then(dados => {
      console.log(dados)
    })
    .catch(erro => {
      console.log(erro);
    }) */
  }


}
