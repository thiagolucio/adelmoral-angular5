import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards = [
    {
      titulo: 'Construções',
      icone: 'extension',
      descricao: 'Realizamos a Construção de seu Imóvel desde o planejamento até o fim de sua obra. Com projetos e planejamento além da mão-de-obra'
    },
  ];

  
}
