import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/base';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  singleProduct!: Iproduct | undefined;
  productID: number = 1;
  constructor(private productService: ProductService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.productID = +params['id'];
        this.singleProduct = this.productService.getSingleProduct(this.productID)
      })
  }

  onProductEdit(){
    // this.router.navigate(['products', this.productID, 'edit'])
    this.router.navigate(['edit'], {relativeTo : this.route , queryParamsHandling : 'preserve'});
  }
}
