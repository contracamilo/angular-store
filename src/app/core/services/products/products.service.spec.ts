import { TestBed, flush } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


fdescribe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get( HttpTestingController);
    service = TestBed.get(ProductsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllProducts Test', () => {   
    it('should return a products array', () => {
          // arrange
    const expectData = [
      {
        id: '1',
        image: '../img',
        title: 'capucha',
        price: 50.000,
        description: 'Saco para salir a vandalear',
      },
      {
        id: '2',
        image: '../img',
        title: 'pantalon',
        price: 50.000,
        description: 'pant para salir a vandalear',
      }
    ];
    let dataError;
    let dataResponse;
    // act
    service.getAllProducts().subscribe(response => {
      dataResponse = response;
    }, error => {
      dataError = error;
    });

    const req = httpTestingController.expectOne(`${environment.urlApi}products/`);
    req.flush(expectData);

    // assert
    expect(dataResponse.length).toEqual(2);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
    });
  });

});
