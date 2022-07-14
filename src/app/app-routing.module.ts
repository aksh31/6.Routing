import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";



const appRoutes:Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component: HomeComponent},
    {path : 'users', component : UsersComponent, children : [
      {path : ':id/:name', component : UserComponent},
    ]},
    {path : 'products', component: ProductsComponent, children : [
      {path : ':id', component: ProductComponent},
      {path : ':id/edit', component: EditProductComponent},
    ]},
    {path :'page-not-found', component : PageNotFoundComponent},
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