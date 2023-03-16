import { Component, OnInit } from '@angular/core';
import { Products } from '../models/model.interface';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  isLoading: boolean = false;
  products: Products[] = [];
  categories: string[] = [];
  cartProduct: any[] = []; 

  constructor(private productServices: ProductServiceService) {

  }
  ngOnInit(): void {
    this.getProduct();
    this.getCtegories();
  }

  getProduct() {
    this.isLoading = true;
    this.productServices.getAllProducts()
      .subscribe((res: any) => {
        this.products = res;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error)
      })

  }
  getCtegories() {
    this.productServices.getAllCategires()
      .subscribe((res: any) => {
        this.categories = res;
      }, error => { console.log(error) })
  }
  getProdyctByCategories(key: string) {
    this.isLoading = true;
    this.productServices.getProductByCategires(key)
      .subscribe((res: any) => {
        this.products = res;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error)
      })
  }


  filterCategories(event: any) {
    let value = event.target.value;
    (value === 'All') ? this.getProduct() : this.getProdyctByCategories(value);
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item => item?.item?.id == event?.item?.id)
      if (exist) {
        alert("this id product is exist");
      } else {
        this.cartProduct.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProduct));
      }
    } else {
      this.cartProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    }
  }
}
