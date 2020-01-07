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


}
