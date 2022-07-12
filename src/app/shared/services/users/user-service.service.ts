import { Injectable } from '@angular/core';
import { Iuser } from '../../model/base';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArray: Iuser[] = [
    {
      name :'John',
      id : 1
    },
    {
      name :'Jonny',
      id : 2
    },
    {
      name :'Janardan',
      id : 3
    },
  ];
  constructor() { }

  getUsersArray(){
    return this.usersArray;
  }

  getSingleUser(id:number){
    return (this.usersArray.find(obj => obj.id === id));
  }

}
