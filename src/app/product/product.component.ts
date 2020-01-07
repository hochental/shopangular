import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-service/product.service';
import {Product} from '../shared/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  id: string

  constructor(private productService: ProductService, private route: ActivatedRoute) {  }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(this.id).subscribe( (product) =>{ this.product = product })

  }

}
