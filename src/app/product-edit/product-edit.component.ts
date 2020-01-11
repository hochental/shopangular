import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../shared/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editProduct: Product;
  id: string;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe(
      (editProduct) => {
        this.editProduct = editProduct;
      }
    );
  }

  onSubmitForm() {
    this.productService.update(this.editProduct, this.id).subscribe( ()=>{
      this.router.navigate(['product/'+this.id]);
    })
  }
}
