import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getAllProducts( ) {
    return this.http.get(enviroments.baseApis+'products')
  }

  getAllCategires() {
    return this.http.get(enviroments.baseApis + 'products/categories')
  }

  getProductByCategires(key:string) {
    return this.http.get(enviroments.baseApis + 'products/category/' + key)
  }
  getProductById(id:number) {
    return this.http.get(enviroments.baseApis + 'products/' + id)

  }
}
