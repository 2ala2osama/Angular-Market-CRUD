import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/model.interface';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  data!:Products;
  id: any = 0;
  isLoading: boolean = false;

  constructor(private productServices: ProductServiceService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.isLoading = true;

    this.productServices.getProductById(this.id)
      .subscribe((res: any) => {
        this.data = res;
        this.isLoading = false;

      }, error => {
        console.log(error);
        this.isLoading = false;

      })
  }
}
