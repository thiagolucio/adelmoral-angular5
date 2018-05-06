import {Component, OnInit} from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import 'rxjs/add/operator/map';

export type Item = { id: number, tituloConstrucao: string, descricaoConstrucao: string, url: string };

@Component({
  selector: 'app-construcoes',
  templateUrl: './construcoes.component.html',
  styleUrls: ['./construcoes.component.css']
})
export class ConstrucoesComponent implements OnInit {

  construcoes: Array<any>;

   constructor(private http: Http) {}
     // construcoes: any[] = [
  //   {
  //     "id": 1,
  //     "tituloConstrucao": "Titulo da Construcao 1",
  //     "descricaoConstrucao": "Descricao da Construção 2",
  //     url: 'http://www.adelmoral.com.br/images/acompanheObras/terra-domus/acompanhe_obras0102.jpg'
  //   },
  //   {
  //     "id": 2,
  //     "tituloConstrucao": "Titulo da Construcao 2",
  //     "descricaoConstrucao": "Descricao da Construção 2",
  //     url: 'http://www.adelmoral.com.br/images/acompanheObras/terra-domus/acompanhe_obras0102.jpg'
  //   }
  // ]

  ngOnInit() {
       this.http
      .get("/assets/data/construcoes.json")
      .map(data => data.json() as Array<Item>)
      .subscribe(data => {
        this.construcoes = data;
        console.log(data);
      });
  }
  
}

