import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from 'src/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent
  implements /*OnChanges,*/ OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  /*

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges', changes);
  }*/

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    // 'if you want to check changes ina a proper way'
    console.log('4. DoCheck');
  }

  ngOnDestroy(): void {
    //
    console.log('5. On Destroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
    // here async calls
  }
}
