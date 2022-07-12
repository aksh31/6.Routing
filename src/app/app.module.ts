import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';


const appRoutes:Routes = [
  {path : '', component: HomeComponent},
  {path : 'users', component : UsersComponent, children : [
    {path : ':id/:name', component : UserComponent},
  ]},
  {path : 'products', component: ProductsComponent, children : [
    {path : ':id', component: ProductComponent},
    {path : ':id/edit', component: EditProductComponent},
  ]},
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    UserComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
