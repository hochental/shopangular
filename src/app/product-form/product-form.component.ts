import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../shared/product';
import {ProductCategory} from '../shared/product-category';
import {ProductcategoryService} from '../productcategory-service/productcategory.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input()
  product:Product;

  @Input()
  category: ProductCategory;

  categories: ProductCategory[];

  constructor(private productCategoriesService: ProductcategoryService) { }

  ngOnInit() {
    this.productCategoriesService.getCategories().subscribe(
      (category : ProductCategory[]) => {
        this.categories=category;
      }
    )
  }
}
