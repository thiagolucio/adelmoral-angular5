import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { rounting } from './app.routing';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopbarModule } from './topbar/topbar.module';
import { TopbarComponent } from './topbar/topbar.component';
import { ObrasComponent } from './obras/obras.component';
import { ObrasModule } from './obras/obras.module';
import { ServicosComponent } from './servicos/servicos.component';
import { ServicosModule } from './servicos/servicos.module';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ContatoComponent } from './contato/contato.component';
import { ContatoModule } from './contato/contato.module';
import { PessoalModule } from './pessoal/pessoal.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ConstrucoesComponent } from './construcoes/construcoes.component';
import { ReformasComponent } from './reformas/reformas.component';
import { ReformasModule } from './reformas/reformas.module';
import { LegalizacoesComponent } from './legalizacoes/legalizacoes.component';
import { LegalizacoesModule } from './legalizacoes/legalizacoes.module';
import { LaudosComponent } from './laudos/laudos.component';
import { LaudosModule } from './laudos/laudos.module';
import { VistoriasComponent } from './vistorias/vistorias.component';
import { VistoriasModule } from './vistorias/vistorias.module';
import { EspeciaisComponent } from './especiais/especiais.component';
import { EspeciaisModule } from './especiais/especiais.module';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageHeaderModule } from './page-header/page-header.module';





;


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
    EspeciaisComponent,
    PageHeaderComponent
    
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
    HomeModule,
    PageHeaderModule,
    EspeciaisModule,
    LaudosModule,
    LegalizacoesModule,
    ReformasModule,
    VistoriasModule
  ],
  exports: [
    MaterialModule,
    PageHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent, PageHeaderComponent]
})
export class AppModule {}
