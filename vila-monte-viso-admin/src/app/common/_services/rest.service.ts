import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


export abstract class RestService<T> {
  private token = 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token;
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token});
  private options = new RequestOptions({ headers: this.headers });

  constructor(protected _http: Http, protected actionUrl: string) {
  }

  getAll (): Observable<T[]> {
    return this._http.get(this.actionUrl, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  add (data: T): Observable<T> {
    let body = JSON.stringify(data);
    return this._http.post(this.actionUrl, body, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

  update(data: T) {
    let body = JSON.stringify(data);
    return this._http.put(`${this.actionUrl}${data['id']}`, body, this.options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  remove(data: T)  {
    return this._http.delete(`${this.actionUrl}${data['id']}`, this.options)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }
} 