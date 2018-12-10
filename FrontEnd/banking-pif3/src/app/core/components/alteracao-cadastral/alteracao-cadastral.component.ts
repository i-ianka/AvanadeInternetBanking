import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-alteracao-cadastral',
  templateUrl: './alteracao-cadastral.component.html',
  styleUrls: ['./alteracao-cadastral.component.css']
})
export class AlteracaoCadastralComponent implements OnInit {

 teste = "altera dados works"

  constructor(private user: UserService, private auth: AuthService) { }

  ngOnInit() {
  }

}
