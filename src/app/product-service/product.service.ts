import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = 'http://localhost:8080/rest/product';

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(this.BASE_URL+"/"+id);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.BASE_URL);
  }

  saveProduct(newProduct: Product) {
    return this.http.post<Product>(this.BASE_URL, newProduct)
  }

  deleteProduct(id: number){
    return this.http.delete(this.BASE_URL+"?id="+id);
  }

  update(editProduct: Product, id: string) {
    return this.http.put(this.BASE_URL+"?id="+id, editProduct);
  }
}
