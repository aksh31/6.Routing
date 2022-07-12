import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/base';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  singleProduct !: Iproduct | undefined;
  pName!: string | undefined;
  pStatus!: string | undefined;
  pId!: number | undefined;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
      .subscribe((params: Params) => {
        this.pId = +params['id'];
        this.singleProduct = this.productService.getSingleProduct(this.pId);
      })

    this.pName = this.singleProduct?.pName;
    this.pStatus = this.singleProduct?.pStatus;
    this.pId = this.singleProduct?.id;
  }

}
