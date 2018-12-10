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

   getConta(document, token): Observable<Iuser>{
 /*    ApiRoutes.get('/account', verifyToken, async function(req, res) {
      const { number, agency, id } = req.body; */
        const headers = new HttpHeaders()
        .set('token', token);
      this.dadosUserLogado = this.http.get<Iuser>('http://localhost:3000/api/user/'+document, {headers: headers})
      return  this.http.get<Iuser>('http://localhost:3000/api/user/'+document, {headers: headers})
    }

    getFavorecido(){
      /* apiRoutes.get('/account/favored', verifyToken, async (req,res) => {
        const {document,number,agency} = req.body; */
    }

    postTransferencia(){
      /* apiRoutes.post('/account/transfer', verifyToken, async function(req, res) {
        const { accNumOrig, accAgeOrig, accNumDes, accAgeDes, transfMsg, value } = req.body; */
    
    }    


    putAtualizaCadastro(){
      /* phone, email, password, newPassword, id 
      apiRoutes.put('/update', verifyToken, async (req, res) => {
        const { phone, email, password, newPassword, id } = req.body;
        let user; */
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