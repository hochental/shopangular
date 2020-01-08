import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategory} from '../shared/product-category';
import {Product} from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  private BASE_URL = 'http://localhost:8080/rest/productcategory';

  constructor(private http:HttpClient) { }

  getCategory():Observable<ProductCategory>{
    return this.http.get<ProductCategory>(this.BASE_URL);
  }

  getCategories():Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.BASE_URL);
  }

}
