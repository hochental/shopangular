import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../shared/product';
import {ShoppingCart} from '../shared/shopping-cart';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  @Input()
  cartInfo: Array<Product>

  completedCart: ShoppingCart;

  constructor() { this.completedCart=new ShoppingCart();}

  ngOnInit() {



  }

  ok() {

    //jezeli istneije koszyk to dodaj



    //jezeli nie istenie to nowy
    let value=0;
    for(let product of this.cartInfo){
      value+=product.price;
    }
    this.completedCart.shoppingCart=this.cartInfo;
    this.completedCart.value=value;
    console.log(this.completedCart);
  }
}
