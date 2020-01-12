import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-service/product.service';
import {Product} from '../shared/product';
import {Router} from '@angular/router';
import {ShoppingCart} from '../shared/shopping-cart';
import {User} from '../shared/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listProduct: Product[];
  productList: Array<Product> = [];
  cart: Map<Product, number>;
  cartValie: number;
  errorMsg;

  constructor(private productService:ProductService, private router: Router ) { this.cart=new Map<Product, number>(); this.cartValie=0; }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (product: Product[])=>{
        this.listProduct = product;
        }, error => this.errorMsg = error);
  }


  addCart(product: Product){
    if(!this.cart.has(product)) {
      this.cart.set(product, Number(product.pictureLink));
      this.cartValie=this.cartValie+(Number(product.pictureLink)*product.price);
    }else {
      this.cart.set(product, this.cart.get(product)+Number(product.pictureLink));
      this.cartValie=this.cartValie+(Number(product.pictureLink)*product.price);
    }
    console.log(this.cart);
    console.log(this.cartValie);
  }

  method(id: number) {
    this.productService.deleteProduct(id).subscribe( () =>{window.location.reload()})
  }

  onSubmit() {

  }
}
