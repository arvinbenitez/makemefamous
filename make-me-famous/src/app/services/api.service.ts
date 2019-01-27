import { Injectable } from '@angular/core';
import { Http,Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    private urlRoot = "https://uqnwkd53nl.execute-api.us-west-2.amazonaws.com/Prod/";


    public accounts(): Observable<any> {
        return this.get("accounts").pipe(map( (x: Response) => x.json()));
    }

    public orders(): Observable<any> {
        return this.get("orders").pipe(map( (x: Response) => x.json()));
    }

    public startSession(accountId: number): Observable<any>{
        return this.post(`session/${accountId}`,{});
    }

    private get(url: string): Observable<Response>{
        const randomNumber = new Date().getTime();
        let newUrl = "";
        if (url.indexOf("?") > -1) {
            newUrl = `${url}&_t=${randomNumber}`;
        }
        else {
            newUrl = `${url}?_t=${randomNumber}`;
        }
        return this.http.get(`${this.urlRoot}${newUrl}`, this.GetOptions());
    }

    private post(url: string, payload: any): Observable<Response>{
        const body = payload ? JSON.stringify(payload) : "";
        return this.http.post(`${this.urlRoot}${url}`, body, this.GetOptions())
    }

    private GetOptions(): RequestOptions {
        const headers: Headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${window.localStorage.getItem("token")}`
        });
        return new RequestOptions({ headers });
    }
}