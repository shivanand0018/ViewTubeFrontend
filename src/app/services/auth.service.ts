import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }
    isLoggedIn: boolean = false;
    isUserAdmin: boolean = false;

    redirectUrl: string = "";

    login(Username: string,password:string) {
        if (Username == 'admin' && password=='1234') {
            this.isLoggedIn = true;
        }
    }
    
}