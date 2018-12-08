import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor() { }
}


/* import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { ICerveja } from '../models/cerveja'; --> ICerveja esta para UserModule

@Injectable({
  providedIn: 'root'
})
export class CervejaService {
  url: string = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) {  }

  getCervejas(){
    return this.http.get<ICerveja[]>(this.url + 'beers').toPromise()
  }
  //pega uma cerveja usando o id como parametro
  getCerveja(id: number){
    return this.http.get<ICerveja>(this.url + `beer/${id}`).toPromise()
  }
  //cadatra uma nova cerveja
  postCerveja(cerveja: ICerveja){
    return this.http.post(this.url + "beer", cerveja).toPromise()
  }
  //edita uma cerveja
  putCerveja(cerveja: ICerveja){
    return this.http.put(this.url + `beer/${cerveja.id}`, cerveja).toPromise()
  }
  //deleta uma cerveja
  deleteCerveja(id: number){
    return this.http.delete(this.url + `beer/${id}`).toPromise()
  }

} */