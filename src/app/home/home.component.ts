import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeText: string;
  constructor() { }

  ngOnInit() {

    this.homeText = 'WELLCOME TO WILD WORLD IMPORTERS APPLICATION';
  }

}
