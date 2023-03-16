import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../models/model.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
  @Input() data!: Products;
  @Output() item= new EventEmitter();
  isAdd: boolean = false;
  amount:number=0
 ngOnInit(): void {
 }
  
  add() {
    this.item.emit({ item: this.data, quentity: this.amount });
    this.isAdd = false;

  }
}
