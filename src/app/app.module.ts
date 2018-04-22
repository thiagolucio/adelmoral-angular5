import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { rounting } from './app.routing';


import { AppComponent } from './app.component';
import { ServicosModule } from './servicos/servicos.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicosComponent } from './servicos/servicos.component';
import { TopbarModule } from './topbar/topbar.module';
import { TopbarComponent } from './topbar/topbar.component';
import { ObrasComponent } from './obras/obras.component';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ContatoComponent } from './contato/contato.component';
import { ContatoModule } from './contato/contato.module';
import { PessoalModule } from './pessoal/pessoal.module';
import { ObrasModule } from './obras/obras.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ConstrucoesComponent } from "./construcoes/construcoes.component";
import { ReformasComponent } from "./reformas/reformas.component";
import {LegalizacoesComponent} from "./legalizacoes/legalizacoes.component";
import { LaudosComponent } from "./laudos/laudos.component";
import { VistoriasComponent } from "./vistorias/vistorias.component";
import { EspeciaisComponent } from "./especiais/especiais.component";
import {ContrucoesService} from "./construcoes/construcoes.service"


@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    TopbarComponent,
    ObrasComponent,
    PessoalComponent,
    ContatoComponent,
    HomeComponent,
    ConstrucoesComponent,
    ReformasComponent,
    LegalizacoesComponent,
    LaudosComponent,
    VistoriasComponent,
    EspeciaisComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServicosModule,
    MaterialModule,
    TopbarModule,
    ContatoModule,
    PessoalModule,
    ObrasModule,
    FlexLayoutModule,
    HttpClientModule,
    rounting,
    HomeModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContrucoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
