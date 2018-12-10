import { Component, OnInit } from '@angular/core';
import { FuncaoService } from 'src/app/services-css/funcao.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

  constructor(private funcService : FuncaoService) { }

  ngOnInit() {
    var a=  this.funcService.getDados
    console.log(a)
  }

  

}
