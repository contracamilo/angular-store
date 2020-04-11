import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from 'src/interfaces/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    );
  }

  /*
  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  } */

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'new from angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'new product',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 6000,
      description: 'Que linda saco',
    };
    this.productsService
      .updateProduct('2', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('id').subscribe((res) => {
      console.log(res);
    });
  }

  getRamdonUsers() {
    this.productsService.GerRandomUser().subscribe(
      (users) => {
        console.log(users);
      },
      (error) => {
        alert(`${error}`);
      }
    );
  }

  getFile() {
    // ver file saver js
    this.productsService.getFile().subscribe((content) => {
      console.log(content);
    });
  }
}
