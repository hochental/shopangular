import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-service/product.service';
import {Product} from '../shared/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listProduct: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (product: Product[])=>{
        console.log(product)
        this.listProduct = product })
  }

}
