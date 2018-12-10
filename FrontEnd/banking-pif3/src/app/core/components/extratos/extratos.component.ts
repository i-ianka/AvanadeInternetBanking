import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-extratos',
  templateUrl: './extratos.component.html',
  styleUrls: ['./extratos.component.css']
})
export class ExtratosComponent implements OnInit {

  constructor(private user: UserService, private auth: AuthService) { }

  teste = "ola extratos"

  ngOnInit() {
  }

}
