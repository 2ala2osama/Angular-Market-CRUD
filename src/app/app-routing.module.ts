import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/cart/cart.component';
import { AllProductsComponent } from './product/all-products/all-products.component';
import { ProductsDetailsComponent } from './product/products-details/products-details.component';

const routes: Routes = [

  { path: "product", component: AllProductsComponent },
  { path: "product-details/:id", component: ProductsDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "**", redirectTo: "product", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
