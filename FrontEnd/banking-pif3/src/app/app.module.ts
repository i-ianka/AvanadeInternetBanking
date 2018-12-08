import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


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
    PontoVirgulaPipe
  ],
  imports: [
    BrowserModule,
   

    FormsModule,
    HttpClientModule, //Faz requests http
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
/*      ,
      { path: 'o-projeto', component: OProjetoComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'atendimento', component: AtendimentoComponent }, */

      { path: 'core', component: MenuComponent },
      {  path: 'core/altera-cadastro', component: AlteracaoCadastralComponent },
      { path: 'core/transferencia', component: TransferenciasComponent },
      { path: 'core/extratos', component: ExtratosComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
