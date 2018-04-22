import { Component, OnInit } from '@angular/core';
import { ImgSrcDirective } from '@angular/flex-layout';
import { ContrucoesService } from './construcoes.service';

@Component({
  selector: 'app-construcoes',
  templateUrl: './construcoes.component.html',
  styleUrls: ['./construcoes.component.css']
})
export class ConstrucoesComponent implements OnInit {

  public construcoes = [];

  constructor(private _construcoesService: ContrucoesService) { }

  ngOnInit() {
    this._construcoesService.getConstrucoes()
      .subscribe(data => this.construcoes = data);
  }

}
export interface IConstrucoes {
  idConstrucao: number,
  tituloConstrucao: string,
  descricaoConstrucao: string,
  imagemConstrucoes: ImgSrcDirective
}