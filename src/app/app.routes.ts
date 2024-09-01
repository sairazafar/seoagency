import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

export const routes: Routes = [
    {path:"", redirectTo:"Home", pathMatch:"full"}, // home page
    {path:"**", redirectTo:"Home", pathMatch:"full"}, // home page if need 404 remove redirectTo:"Home", and commonent:"anycommonentfile" 
    {path:"Home",component:HomeComponent}, // home page
    {path:"About-Us",component:AboutComponent}, // about page
    {path:"Contact-Us",component:ContactUsComponent}, // home page
    {path:"products", component:ProductsComponent},
    { path: 'ProductDetail/:id', component: ProductDetailComponent }
    
];