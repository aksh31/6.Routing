import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproduct } from '../../model/base';



// it Exports here for type given in CanDeactivate interface we used on class below..
// we can give Iproduct type to it. but, we want to use Deactivate service is not only on product component, so thats why we use new interface for reusebility everywhere....

export interface CanComponentDeactivate{
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGaurdService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }


  canDeactivate(component: CanComponentDeactivate, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot | undefined): boolean | Observable<boolean> | Promise<boolean> {
    
    return component.canDeactivate();
  }





}
