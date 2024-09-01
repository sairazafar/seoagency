import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   baseUrl = 'https://fakestoreapi.com/products';
   productApi = `${this.baseUrl}products`;

   //any --- we type of data
   //` 
 productsData():Observable<any> {
   return this.http.get(`${this.productApi}`)
  }
}
