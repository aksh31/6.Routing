import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/base';
import { UserService } from 'src/app/shared/services/users/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user! : Iuser ;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    }
    this.route.params       // Observable
                    .subscribe(
                      (myParams : Params ) => {
                        this.user = {
                          id : myParams['id'],
                          name: myParams['name']
                        }
                      }
                    )
  }

}
