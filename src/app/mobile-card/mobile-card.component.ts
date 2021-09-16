import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.css'],
})
export class MobileCardComponent implements OnInit, AfterViewChecked {
  @Output() updateHeader = new EventEmitter();
  @Output() deleteData = new EventEmitter();

  newPrice: any = '';

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

  updateAmount: boolean = false;

  edit() {
    this.updateAmount = !this.updateAmount;
  }

  header = {
    name: '',
    amount: '',
  };

  ngAfterViewChecked() {
    if (this.newPrice != '') {
      this.header.amount = this.newPrice;
    }
  }

  active(data: any) {
    if (data.path[1].className == 'cardwrapper') {
      for (let i = 0; i < data.path[3].children.length; i++) {
        data.path[3].children[i].children[0].style.border = '2px solid black';
        data.path[3].children[i].children[0].style.backgroundColor =
          'rgb(248, 248, 248)';
      }
      data.path[1].style.border = '4px solid green';
      data.path[1].style.backgroundColor = 'rgba(187, 222, 251, 0.137)';
    }
  }

  ngOnInit(): void {}

  @ViewChild('button', { static: true }) something!: ElementRef;
  change() {
    console.log(this.something.nativeElement);
  }

  delete(event: object) {
    this.deleteData.emit(event);
    this.change();
  }

  update(name: string, amount: string) {
    this.header.amount = amount;
    this.header.name = name;
    this.updateHeader.emit(this.header);
  }
}
