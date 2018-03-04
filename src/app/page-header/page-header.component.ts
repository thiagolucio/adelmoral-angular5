import { Component, OnInit } from '@angular/core';
import { rounting } from '../app.routing';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  title = "Home";
   
  
  
  
  constructor() { }

  ngOnInit() {
  }

}
