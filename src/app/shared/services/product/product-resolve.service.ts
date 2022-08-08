import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproduct, uniPro } from '../../model/base';
import { ProductService } from '../product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<uniPro> {

  constructor(private productService : ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): uniPro | Observable<uniPro> | Promise<uniPro> {
    return this.productService.getSingleProduct(+route.params['id']);
  }
}
