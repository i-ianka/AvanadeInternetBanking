// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule} from '@angular/common/http';


// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';



// //login
// import {  HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthGuard } from './auth.guard'



// //components
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { MenuComponent } from './core/components/menu/menu.component';
// import { ExtratosComponent } from './core/components/extratos/extratos.component';
// import { AlteracaoCadastralComponent } from './core/components/alteracao-cadastral/alteracao-cadastral.component';
// import { TransferenciasComponent } from './core/components/transferencias/transferencias.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { OProjetoComponent } from './components/o-projeto/o-projeto.component';
// import { SobreComponent } from './components/sobre/sobre.component';
// import { AtendimentoComponent } from './components/atendimento/atendimento.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { BarComponent } from './core/components/bar/bar.component';
// import { HomeComponent } from './components/home/home.component';
// import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
// import { PontoVirgulaPipe } from './pipes/ponto-virgula.pipe';

// import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
// import { LoginService } from './services/login.service';
// import { UserService } from './services/user.service';
// import { ContaService } from './services/conta.service';
// import { CommonModule } from '@angular/common';

// import { AdmineComponent } from './admine/admine.component';
// import { HomeeComponent } from './homee/homee.component';
// import { AuthService } from './auth.service';
// import { LogoutComponent } from './components/logout/logout.component';
// import { AutenticacaoService } from './services/autenticacao.service';
// import { AlteraCadastroService } from './services/altera-cadastro.service';
// import { TransacoesService } from './services/transacoes.service';

// //pipes

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     HomeComponent,
//     MenuComponent,
//     ExtratosComponent,
//     AlteracaoCadastralComponent,
//     TransferenciasComponent,
//     SidebarComponent,
//     OProjetoComponent,
//     SobreComponent,
//     AtendimentoComponent,
//     FooterComponent,
//     BarComponent,
//     EspacoMoedaPipe,
//     PontoVirgulaPipe,
   
//     DadosUsuarioComponent,
   

   
//     AdmineComponent,
   
//     HomeeComponent,
   
//     LogoutComponent,
   
   
//   ],
//   imports: [
//     BrowserModule, //instancia a aplicação no navegador
//     HttpClientModule, //Faz requests http
//     FormsModule, //da suporte data biding component DOM two way
//     RouterModule,
//     CommonModule,
    
//     BrowserModule,
//    // Observable,
//     FormsModule,
//     HttpClientModule, //Faz requests http
//     RouterModule,
//     RouterModule.forRoot([
//       { path: 'dados', component: DadosUsuarioComponent },
//       { path: 'home', component: HomeComponent },
//       { path: 'login', component: LoginComponent},
     
// /* --------------one single page app    
//       { path: 'o-projeto', component: OProjetoComponent },
//       { path: 'sobre', component: SobreComponent },
//       { path: 'atendimento', component: AtendimentoComponent }, */

//       { path: 'admine', component: AdmineComponent, 
//                canActivate: [AuthGuard]},
//       { path: 'core', component: MenuComponent  },
//       {  path: 'admine/altera-cadastro', component: AlteracaoCadastralComponent, canActivate: [AuthGuard] },
//       { path: 'admine/transferencia', component: TransferenciasComponent, canActivate: [AuthGuard] },
//       { path: 'admine/extratos', canActivate: [AuthGuard], component: ExtratosComponent },

//       //login
//       { path: 'homee', component: HomeeComponent },
//       { path: 'logout', component: LoginComponent},
     
//       //CORE
//       { path: 'menu', component: MenuComponent },
//       { path: 'extratos', component: ExtratosComponent},
//       { path: 'transferencia', component: TransferenciasComponent },
//       { path: 'alterar-cadastro', component: AlteracaoCadastralComponent},
  


//    /*    { path: '', redirectTo: 'home'},
//       { path: '**', redirectTo: 'home'} */
//     ])
//   ],
//   providers: [
//     LoginService,
//     UserService,
//     ContaService,
//     AuthService,
//     AuthGuard
   
    
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';



//login
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard'



//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ExtratosComponent } from './core/components/extratos/extratos.component';
import { AlteracaoCadastralComponent } from './core/components/alteracao-cadastral/alteracao-cadastral.component';
import { TransferenciasComponent } from './core/components/transferencias/transferencias.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OProjetoComponent } from './components/o-projeto/o-projeto.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarComponent } from './core/components/bar/bar.component';
import { HomeComponent } from './components/home/home.component';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
import { PontoVirgulaPipe } from './pipes/ponto-virgula.pipe';

import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ContaService } from './services/conta.service';
import { CommonModule } from '@angular/common';

import { AdmineComponent } from './admine/admine.component';
import { HomeeComponent } from './homee/homee.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { AutenticacaoService } from './services/autenticacao.service';
import { AlteraCadastroService } from './services/altera-cadastro.service';
import { TransacoesService } from './services/transacoes.service';

//pipes

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ExtratosComponent,
    AlteracaoCadastralComponent,
    TransferenciasComponent,
    SidebarComponent,
    OProjetoComponent,
    SobreComponent,
    AtendimentoComponent,
    FooterComponent,
    BarComponent,
    EspacoMoedaPipe,
    PontoVirgulaPipe,
   
    DadosUsuarioComponent,
   

   
    AdmineComponent,
   
    HomeeComponent,
   
    LogoutComponent
  ],
  imports: [
    BrowserModule, //instancia a aplicação no navegador
    HttpClientModule, //Faz requests http
    FormsModule, //da suporte data biding component DOM two way
    RouterModule,
    CommonModule,
    
    BrowserModule,
   // Observable,
    FormsModule,
    HttpClientModule, //Faz requests http
    RouterModule,
    RouterModule.forRoot([
      { path: 'dados', component: DadosUsuarioComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent},
     
/* --------------one single page app    
      { path: 'o-projeto', component: OProjetoComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'atendimento', component: AtendimentoComponent }, */

      { path: 'admine', component: AdmineComponent, 
               canActivate: [AuthGuard]},
      { path: 'core', component: MenuComponent  },
      {  path: 'admine/altera-cadastro', component: AlteracaoCadastralComponent, canActivate: [AuthGuard] },
      { path: 'admine/transferencia', component: TransferenciasComponent, canActivate: [AuthGuard] },
      { path: 'admine/extratos', canActivate: [AuthGuard], component: ExtratosComponent },

      //login
      { path: 'homee', component: HomeeComponent },
      { path: 'logout', component: LoginComponent},
     
      //CORE
      { path: 'menu', component: MenuComponent },
      { path: 'extratos', component: ExtratosComponent},
      { path: 'transferencia', component: TransferenciasComponent },
      { path: 'alterar-cadastro', component: AlteracaoCadastralComponent},
  
      


   /*    { path: '', redirectTo: 'home'},
      { path: '**', redirectTo: 'home'} */
    ])
  ],
  providers: [
    LoginService,
    UserService,
    ContaService,
    AuthService,
    AuthGuard,
    AutenticacaoService,
    AlteraCadastroService,
    TransacoesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }