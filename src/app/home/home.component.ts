import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import 'rxjs/add/operator/map';

export type Item = { idSessaoUm: number, tituloSessaoUm: string, descricaoSessaoUm: string, urlSessaoUm: string };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  home: Array<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http
      .get("/assets/data/sessaoHome.json")
      .map(data => data.json() as Array<Item>)      
      .subscribe(data => {
        this.home = data;
        console.log(data);
      });
  }

}
