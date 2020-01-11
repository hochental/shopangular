import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-service/product.service';
import {Product} from '../shared/product';
import {Router} from '@angular/router';
import {ShoppingCart} from '../shared/shopping-cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listProduct: Product[];

  productList: Array<Product> = [];

  numbers: number[];

  constructor(private productService:ProductService, private router: Router ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (product: Product[])=>{
        this.listProduct = product })
  }

  addCart(product: Product){
    this.productList.push(product);
  }

  method(id: number) {
    this.productService.deleteProduct(id).subscribe( () =>{window.location.reload()})
  }

  onSubmit() {

  }
}
