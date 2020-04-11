import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from 'src/interfaces/product.model';
import { environment } from './../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import * as Sentry from '@sentry/browser';

interface Users {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.urlApi}products/`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.urlApi}products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.urlApi}products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(
      `${environment.urlApi}products/${id}`,
      changes
    );
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(`${environment.urlApi}products/${id}`);
  }

  //Test
  GerRandomUser(): Observable<Users[]> {
    return this.http.get('https://randomuser.me/api/?results=2').pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as Users[])
    );
  }

  getFile() {
    return this.http.get('../../../../assets/files/text.txt', {
      responseType: 'text',
    });
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    Sentry.captureException(error);
    return throwError('Ocurrio un error');
  }
}

/*
products: Product[] = [
  {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '2',
    image: 'assets/images/hoodie.png',
    title: 'Hoodie',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '3',
    image: 'assets/images/mug.png',
    title: 'Mug',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '4',
    image: 'assets/images/pin.png',
    title: 'Pin',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '5',
    image: 'assets/images/stickers1.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '6',
    image: 'assets/images/stickers2.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  }
];
*/
