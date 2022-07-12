import { Component, OnInit } from '@angular/core';
import { Iuser } from '../shared/model/base';
import { UserService } from '../shared/services/users/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Iuser[] = [];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsersArray();
  }

}
