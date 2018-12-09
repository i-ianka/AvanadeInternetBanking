import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-alteracao-cadastral',
  templateUrl: './alteracao-cadastral.component.html',
  styleUrls: ['./alteracao-cadastral.component.css']
})
export class AlteracaoCadastralComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
