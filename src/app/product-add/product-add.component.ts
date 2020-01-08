import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import {ProductService} from '../product-service/product.service';
import {Router} from '@angular/router';
import {ProductCategory} from '../shared/product-category';
import {ProductcategoryService} from '../productcategory-service/productcategory.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  newProduct: Product;
  category: ProductCategory;


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.newProduct=new Product();
    this.newProduct.raiting=0;
    this.category=new ProductCategory();
  }

  onSubmit() {
   this.productService.saveProduct(this.newProduct).subscribe(
      ()=>{
        this.newProduct=new Product();
      this.router.navigate(['/'])
      });

  }
}
