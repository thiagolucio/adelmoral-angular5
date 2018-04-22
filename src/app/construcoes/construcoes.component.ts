import {Component, OnInit} from '@angular/core';
import {ContrucoesService} from './construcoes.service';

@Component({
  selector: 'app-construcoes',
  templateUrl: './construcoes.component.html',
  styleUrls: ['./construcoes.component.css']
})
export class ConstrucoesComponent implements OnInit {

  construcoes: Array<any>;

  constructor(private construcoesService: ContrucoesService) {
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.construcoesService.listar().subscribe(dados => this.construcoes = dados);
  }
}

