import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  title = 'Adel Moral Arquitetura & Engenharia';
  constructor() { }

  ngOnInit() {
  }

  obras = [
    { item: 'Construções', url: '/construcoes'},
    { item: 'Reformas', url: '/reformas'},
    { item: 'Legalizações', url: '/legalizacoes'},
    { item: 'Laudos', url: '/laudos'},
    { item: 'Vistorias', url: '/vistorias'},
    { item: 'Especiais', url: '/especiais'},
  ];

}
