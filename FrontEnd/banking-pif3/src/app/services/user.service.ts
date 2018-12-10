import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/user/user.module'; 
import { Iuser } from './user-obs';

import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
import { Location } from '@angular/common';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import { AuthService } from '../auth.service';




export interface Itransacao{
 
  type: string ,
  enum: [], 
  value: number,
  //date: number
 // transferAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
  created_at: string
}

export interface Iatualiza{
  success: boolean

}


@Injectable()

export class UserService {
  url: string = 'http://localhost:3000/api/'
  id: number = 87943071452
  stringToken; 
  dadosUserLogado;
  constructor(private http: HttpClient, private auth: AuthService) {  }


  getApi(){
    return this.http.get<Iuser>(this.url);
  } 

  getUser(document, token): Observable<Iuser>{
       const headers = new HttpHeaders()
        .set('token', token);
     this.dadosUserLogado = this.http.get<Iuser>('http://localhost:3000/api/user/'+document, {headers: headers})
      return  this.http.get<Iuser>('http://localhost:3000/api/user/'+document, {headers: headers})
   }

   getConta(number, agency, id): Observable<any>{
 /*    ApiRoutes.get('/account', verifyToken, async function(req, res) {
      const { number, agency, id } = req.body; */
     const headers = new HttpHeaders()
        .set('token', this.auth.theToken);
     return  this.http.get<any>('http://localhost:3000/api/account/', {headers: headers})
    }

    getFavorecido(document,number,agency){
      /* apiRoutes.get('/account/favored', verifyToken, async (req,res) => {
        const {document,number,agency} = req.body; */
        const headers = new HttpHeaders()
        .set('token', this.auth.theToken);
     //return  this.http.get<Iconta>('http://localhost:3000/api/account/favored', {document, number, agency})
    }

    postTransferencia(accNumOrig, accAgeOrig, accNumDes, accAgeDes, transfMsg){
      /* apiRoutes.post('/account/transfer', verifyToken, async function(req, res) {
        const { accNumOrig, accAgeOrig, accNumDes, accAgeDes, transfMsg, value } = req.body; */
        const headers = new HttpHeaders()
         .set('token', this.auth.theToken);
        return this.http.post<Itransacao>('http://localhost:3000/api/account/transfer', {accNumOrig, accAgeOrig, accNumDes, accAgeDes, transfMsg})
    }    


    putAtualizaCadastro(phone, email, password, newPassword, id){
      /* phone, email, password, newPassword, id n
      apiRoutes.put('/update', verifyToken, async (req, res) => {
        const { phone, email, password, newPassword, id } = req.body;
        let user; */
        const headers = new HttpHeaders()
         .set('token', this.auth.theToken);
        return this.http.put('http://localhost:3000/api/update', {phone, email, password, newPassword, id})
  
    }

  get docGetUser(){
    console.log('dados user', this.dadosUserLogado)
    return this.dadosUserLogado
  }
   
  printNaTela(){
    let token 
    let document
    let dados
    document = this.auth.docUser
    token = this.auth.theToken;
    const headers = new HttpHeaders()
      .set('token', token);
     
      this.http.get('http://localhost:3000/api/user/' + document, { headers: headers })
      .subscribe(response => {
         dados = response;
         dados.log(dados)
      });
  }



} 