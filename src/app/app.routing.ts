import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ConstrucoesComponent } from './construcoes/construcoes.component';
import { ReformasComponent } from "./reformas/reformas.component";
import { LegalizacoesComponent } from "./legalizacoes/legalizacoes.component";
import {LaudosComponent} from "./laudos/laudos.component";
import { VistoriasComponent } from "./vistorias/vistorias.component";
import { EspeciaisComponent } from "./especiais/especiais.component";



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pessoal', component: PessoalComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'construcoes', component: ConstrucoesComponent},
    { path: 'reformas', component: ReformasComponent },
    { path: 'legalizacoes', component: LegalizacoesComponent },
    { path: 'laudos', component: LaudosComponent },
    { path: 'vistorias', component: VistoriasComponent },
    { path: 'especiais', component: EspeciaisComponent }

];
export const rounting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
