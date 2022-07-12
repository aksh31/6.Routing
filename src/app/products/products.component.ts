import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../shared/model/base';
import { ProductService } from '../shared/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
  productArray : Iproduct[] = []; 
  constructor(private productService : ProductService,
              private router : Router,
              private activatedRoute : ActivatedRoute ) {
  }


  ngOnInit(): void {
    this.productArray = this.productService.getProductsArray();
  }

  onHome(){
    this.router.navigate(['']);
  }

  onLoadingProduct(){
    this.router.navigate(['products'], {relativeTo : this.activatedRoute});
  }
}
