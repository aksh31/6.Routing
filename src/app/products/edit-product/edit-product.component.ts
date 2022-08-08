import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/shared/model/base';
import { CanComponentDeactivate, CanDeactivateGaurdService } from 'src/app/shared/services/Authentications/can-deactivate-gaurd.service';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, CanComponentDeactivate {
  singleProduct !: Iproduct | undefined;
  pName!: string | undefined;
  pStatus!: string | undefined;
  pId!: number | undefined;
  
  canNotEdit : boolean = false;

  isChangesSaved : boolean = false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router : Router,
              private canDeactivateGaurdService : CanDeactivateGaurdService) { }

  ngOnInit(): void {

    this.route.queryParams
                  .subscribe((queryParams : Params) => {
                    // console.log(queryParams);
                    this.canNotEdit = queryParams['allowEdit'] === '0'? true : false;
                  })

    this.route.params
                .subscribe((params: Params) => {
                  this.pId = +params['id'];
                  this.singleProduct = this.productService.getSingleProduct(this.pId);
      })

    this.pName = this.singleProduct?.pName;
    this.pStatus = this.singleProduct?.pStatus;
    this.pId = this.singleProduct?.id;
  }

  onProductUpdate(){
    if(this.pId && this.pName && this.pStatus){
      this.productService.updateProduct(this.pId, this.pName, this.pStatus);
      // this.router.navigate(['/products'])
      this.router.navigate(['../'], {relativeTo : this.route, queryParamsHandling : 'preserve'})
      this.isChangesSaved = true;
    }
  }

  canDeactivate(){
    if((this.singleProduct?.pName !== this.pName || this.singleProduct?.pStatus !== this.pStatus) && !this.isChangesSaved){
      return confirm('Do you want discard the chnages ???');
    }else{
      return true;
    }
  }


}
