import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentMobile = 'Mobile';
  currentPrice = 'Price';

  devices = [
    {
      name: 'Poco F1',
      price: '10000',
      ram: '6GB',
      rom: '64GB',
      color: 'blue',
      display: '6 inch',
      processor: 'Snapdragon',
    },
    {
      name: 'Mi Note 10',
      price: '14000',
      ram: '4GB',
      rom: '128GB',
      color: 'white',
      display: '6.2 inch',
      processor: 'MediaTek',
    },
    {
      name: 'Mi Note 9 Pro',
      price: '15000',
      ram: '6GB',
      rom: '64GB',
      color: 'black',
      display: '6.5 inch',
      processor: 'snapdragon',
    },
    {
      name: 'IPhone X',
      price: '95000',
      ram: '-',
      rom: '256GB',
      color: 'blue',
      display: '6 inch',
      processor: 'Apple A13',
    },
    {
      name: 'Vivo',
      price: '25000',
      ram: '6GB',
      rom: '256GB',
      color: 'blue',
      display: '6 inch',
      processor: 'Snapdragon',
    },
    {
      name: 'Oppo',
      price: '12000',
      ram: '4GB',
      rom: '32GB',
      color: 'Nebula',
      display: '5.4 inch',
      processor: 'MediaTek',
    },
    {
      name: 'Poco F2',
      price: '25000',
      ram: '4GB',
      rom: '64GB',
      color: 'pink',
      display: '6.5 inch',
      processor: 'Snapdragon',
    },
    {
      name: 'Samsung M02',
      price: '11000',
      ram: '4GB',
      rom: '64GB',
      color: 'black',
      display: '5.5 inch',
      processor: 'Snapdragon',
    },
  ];

  update(data: any) {
    this.currentMobile = data.name;
    this.currentPrice = data.amount;
  }

  deleteCard(data: any) {
    this.devices = this.devices.filter((mobile) => {
      return mobile != data;
    });
  }
}
