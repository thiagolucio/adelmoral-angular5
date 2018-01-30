import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ObrasComponent } from './obras/obras.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pessoal', component: PessoalComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'contato', component: ContatoComponent },
    // { path: 'construcoes', component: ConstrucoesModule },
    // { path: 'reformas', component: ReformasModule },
    // { path: 'legalizacoes', component: LegalizacoesModule },
    // { path: 'laudos', component: LaudosModule },
    // { path: 'vistorias', component: VistoriasModule },
    // { path: 'especiais', component: EspeciaisModule },

    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];
export const rounting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
