import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() currentMobile!: string;
  @Input() currentPrice!: string;

  constructor() {}

  ngOnInit(): void {}

  default(){
    this.currentMobile = "Mobile";
    this.currentPrice = "Price";
  }
}
