import { Injectable } from '@angular/core';
import { Iproduct } from '../model/base';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productArray: Iproduct[] = [
    {
      id: 1,
      pName: 'iPhone 13 Pro',
      pStatus: 'In Progress'
    },
    {
      id: 2,
      pName: 'MacBook',
      pStatus: 'Dispatched'
    },
    {
      id: 3,
      pName: 'HP Pavilion I5',
      pStatus: 'Delivered'
    }
  ]
  constructor() { }

  getProductsArray(){
    return this.productArray;
  }

  getSingleProduct(id:number){
    let prod = this.productArray.find(obj => obj.id === id);
    return prod;
  }

}
