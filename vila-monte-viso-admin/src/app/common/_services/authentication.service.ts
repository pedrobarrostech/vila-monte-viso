import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    private url = environment.API_URL + 'auth/login';
    private headers = new Headers({ 'Content-Type': 'application/json',  'Access-Control-Allow-Origin': '*' });
    private options = new RequestOptions({ headers: this.headers });
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(private _http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password) {
        let body = JSON.stringify({ username: username, password: password });
        return this._http.post(this.url, body, this.options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this.token = token;
                    this.loggedIn.next(true);
                    return true;
                } else {
                    this.loggedIn.next(false);
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
    }
}
