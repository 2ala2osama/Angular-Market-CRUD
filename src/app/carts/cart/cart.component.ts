import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isLoading: boolean = false;
  cartProduct: any[] = [];
  success: boolean = false;
  total: any = 0;

  constructor(private cartServices: CartService) {

  }
  ngOnInit(): void {
    this.getCart();
    this.getTotal()

  }


  getCart() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      this.getTotal();
    }
  }
  getTotal() {
    this.total = 0;
    for (let x in this.cartProduct) {
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quentity;
    }

  }

  addCartAmount(index: number) {
    this.cartProduct[index].quentity++
    this.getTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));

  }
  minsCartAmount(index: number) {
    this.cartProduct[index].quentity--
    this.getTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
  }
  detectChange() {
    this.getTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));

  }
  deleteProduct(index: number) {
    this.cartProduct.splice(index, 1);
    this.getTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));

  }
  clearCart() {
    this.cartProduct = [];
    this.getTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));

  }

  addCart() {
    let product = this.cartProduct.map(e => {
      return { productId: e.item.id, quentity: e.quentity }
    });



    let Model = {
      userId: 2,
      date: new Date(),
      products: product
    }

    this.cartServices.createCart({ model: Model }).subscribe(res => {
      this.success = true;


    });
  }

}