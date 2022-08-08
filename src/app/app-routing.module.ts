import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorMsgComponent } from "./error-msg/error-msg.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";
import { AuthGaurdService } from "./shared/services/Authentications/authGaurd.service";
import { CanDeactivateGaurdService } from "./shared/services/Authentications/can-deactivate-gaurd.service";
import { ProductResolveService } from "./shared/services/product/product-resolve.service";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";



const appRoutes:Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component: HomeComponent},
    {path : 'users', canActivate: [AuthGaurdService], component : UsersComponent, children : [
      {path : ':id/:name', component : UserComponent},
    ]},
    {path : 'products', 
    // canActivate: [AuthGaurdService],
    canActivateChild : [AuthGaurdService],
    component: ProductsComponent, children : [
      // {path : ':id', component: ProductComponent},
      {path : ':id', component: ProductComponent, resolve: {product : ProductResolveService}},
      {path : ':id/edit', canDeactivate: [CanDeactivateGaurdService], component: EditProductComponent},
    ]},
    // {path :'page-not-found', component : PageNotFoundComponent},
    {path :'page-not-found', component : ErrorMsgComponent, data : {msg : 'Hello You have some error In this Page'}},
    {path :'product-not-found', component : ErrorMsgComponent, data : {msg : 'Hello...!! You have some error In this Product go and Purchase another..!!!'}},
    {path : '**', redirectTo : '/page-not-found'}
    
  ]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes),
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule{
    constructor(){ }
}