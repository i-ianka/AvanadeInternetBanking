import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class AutenticacaoService {

  constructor(private http: HttpClient) {
      //http.get(''http://localhost:3000/user/doc')
    /*   //  .subscribe(response => {
          console.log(response.json ())
      }) */
   }
   url : string = 'http://localhost:3000/';


   login(dadosLogin){
      return this.http.post('api/login', JSON.stringify(dadosLogin));
   }

   logout() {

   }

   estaLogado() {
     return false;
   }
}
