import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'ng-store';
  items = ['Camilo', 'Cristina', 'Mora'];
  objeto = {};
  power = 10;

  constructor() {}

  ngOnInit() {}

  addItem() {
    this.items.push('Gilma');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
