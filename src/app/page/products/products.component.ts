import { Component, Inject } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import {ProductService} from '../../product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass,NgFor,HttpClientModule , RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any

   constructor (private http: HttpClient, @Inject(Router) private router: Router){}

  ngOnInit() :  void {
    this.FatchProducts();
  }

  FatchProducts(){
    this.http.get<any>("https://fakestoreapi.com/products").subscribe((result)=>{
     // console.log(result)
      this.products = result;
    })    
  }

  viewDetails(product: any) {
    if (typeof product.id === 'string' || typeof product.id === 'number') {
      this.router.navigate(['ProductDetail', product.id]);
    } else {
      console.error('product.id must be a string or number for routing');
    }
  }

}
