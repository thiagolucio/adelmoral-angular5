import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import 'rxjs/add/operator/map';

export type Item = { idSlide: number, tituloSlide: string, descricaoSlide: string, urlSlide: string };

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

    slides: Array<Item>;

  constructor(private http: Http) { }

  ngOnInit() {
      this.http
        .get("/assets/data/slides.json")
        .map(data => data.json() as Array<Item>)
        .subscribe(data => {
        this.slides = data;
        console.log(data);
      });
  }

}
