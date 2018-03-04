import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ObrasComponent } from './obras/obras.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ConstrucoesComponent } from './construcoes/construcoes.component';
import { ReformasComponent } from './reformas/reformas.component';
import { LegalizacoesComponent } from './legalizacoes/legalizacoes.component';
import { LaudosComponent } from './laudos/laudos.component';
import { VistoriasComponent } from './vistorias/vistorias.component';
import { EspeciaisComponent } from './especiais/especiais.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'pessoal', component: PessoalComponent, data: { title: 'Perfil Pessoal' } },
    { path: 'servicos', component: ServicosComponent, data: { title: 'Serviços' } },
    { path: 'contato', component: ContatoComponent, data: { title: 'Contato' } },
    { path: 'construcoes', component: ConstrucoesComponent, data: { title: 'Construções' } },
    { path: 'reformas', component: ReformasComponent, data: { title: 'Reformas' } },
    { path: 'legalizacoes', component: LegalizacoesComponent, data: { title: 'Legalizações' } },
    { path: 'laudos', component: LaudosComponent, data: { title: 'Laudos' } },
    { path: 'vistorias', component: VistoriasComponent, data: { title: 'Vistorias' } },
    { path: 'especiais', component: EspeciaisComponent, data: { title: 'Especiais' } },
    
    // { path: '**', component: PageNotFoundComponent }
];
export const rounting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
