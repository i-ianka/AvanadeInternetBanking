import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* //login
import { RouterModule } from '@angular/router'; 
import { HttpModule } from "@angular/http"; */

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { MenuComponent } from './core/components/menu/menu.component';
import { ExtratosComponent } from './core/components/extratos/extratos.component';
import { AlteracaoCadastralComponent } from './core/components/alteracao-cadastral/alteracao-cadastral.component';
import { TransferenciasComponent } from './core/components/transferencias/transferencias.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { OProjetoComponent } from './components/o-projeto/o-projeto.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarComponent } from './core/components/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    MenuComponent,
    ExtratosComponent,
    AlteracaoCadastralComponent,
    TransferenciasComponent,
    SidebarComponent,
    OProjetoComponent,
    SobreComponent,
    AtendimentoComponent,
    FooterComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
