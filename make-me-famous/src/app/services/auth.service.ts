import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }

    isLoggedIn(): boolean {
        var token = window.localStorage.getItem("token");
        return token ? true: false;
    }

    setToken(token:string): void {
        window.localStorage.setItem("token", token);
    }

    setAccount(accountName:string, accountId:number): void {
        window.localStorage.setItem("accountName", accountName);
        window.localStorage.setItem("accountId", accountId.toString());
    }

    clearToken(): void {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("accountName");
        window.localStorage.removeItem("accountId");
    }
}