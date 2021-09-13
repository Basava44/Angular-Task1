import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.css'],
})
export class MobileCardComponent implements OnInit {

  @Output() updateHeader = new EventEmitter();
  @Output() deleteData = new EventEmitter();

  @Input() mobileData!: {
    name: string;
    price: string;
    ram: string;
    rom: string;
    color: string;
    display: string;
    processor: string;
  };
  constructor() {}

  header={
    name:'',
    amount:'',
  }

  ngOnInit(): void {}

  delete(event:object){
    this.deleteData.emit(event);
  }

  update(name:string, amount:string){
    this.header.amount=amount;
    this.header.name=name;
    this.updateHeader.emit(this.header);
  }

}
