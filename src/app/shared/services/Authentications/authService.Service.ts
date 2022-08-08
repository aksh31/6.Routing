import { Injectable } from "@angular/core";



@Injectable({
    providedIn : 'root'
})
export class AuthService {
    loggedIn : boolean = false;
    constructor() { }

    isAuthenticate(){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(this.loggedIn);
            }, 800)
        })
    }

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}