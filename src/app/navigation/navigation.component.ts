import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/Authentications/authService.Service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }


  ngOnInit(): void {
  }

  onLogIn(){
    this.authService.logIn();
 }

  onLogOut(){
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
