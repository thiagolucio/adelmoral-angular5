import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContrucoesService } from './construcoes.service';
import { HttpClientModule } from '@angular/common/http';
import { ConstrucoesComponent } from './construcoes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ContrucoesService],
  declarations: []
})
export class ConstrucoesModule { }
