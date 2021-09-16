import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CountComponent implements OnInit {
  @Input() count!:Number;
  constructor() { }

  ngOnInit(): void {
  }

}
