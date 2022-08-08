import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/Authentications/authService.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
  }
  // onLoadProducts(){
  //   this.router.navigate(['products'])
  // }
  onLoadProduct(id : number){
    this.router.navigate(['/products', id, 'edit'], {queryParams : { allowEdit : id}})
  }

  onLogIn(){
     this.authService.logIn();
  }


}
