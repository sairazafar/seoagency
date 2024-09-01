import { NgClass, NgFor, NgIf } from '@angular/common';
import {ProductService} from '../../product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,NgFor,HttpClientModule , NgIf ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images = [
    { src: 'assets/images/img2.jpg', alt: 'Image 1 description', title: 'Shop Smart, Live Better!', description: 'Find everything you need to elevate your lifestyle, from fashion must-haves to cutting-edge electronics. Enjoy exclusive discounts and a hassle-free shopping journey with us. Make every day extraordinary!' },
    { src: 'assets/images/img3.jpg', alt: 'Image 2 description', title: 'Where Style Meets Savings!', description: 'Step into a world of stylish selections and irresistible offers. Whether you are updating your wardrobe or revamping your homedir, we have got you covered with top-quality products at prices you will love.' },
    { src: 'assets/images/img4.jpg', alt: 'Image 3 description', title: 'Your Shopping, Your Way!', description: 'Personalize your shopping experience with our curated collections and tailored recommendations. From everyday essentials to unique finds, explore a wide range of products that cater to your individual taste.' }
  ];
  
  products: any[] = [];
  displayedProducts: any[] = [];
  allProductsVisible: boolean = false;

   constructor (private http: HttpClient, private router: Router){}
  //constructor (private service: ProductService){} --- with service
  ngOnInit() :  void {
    this.FatchProducts();
  }
  FatchProducts(){
    this.http.get<any>("https://fakestoreapi.com/products").subscribe((result)=>{
      console.log(result)
      this.products = result;
      this.displayedProducts = this.products.slice(0, 8);
    })
    

  }
  showAllProducts() {
    this.router.navigate(['products']);
  }
  // FatchProducts(){
  //   this.service.productsData().subscribe((result)=>{
  //     console.log(result)
  //     this.products = result
  //   })
  // } --- with service
  
}