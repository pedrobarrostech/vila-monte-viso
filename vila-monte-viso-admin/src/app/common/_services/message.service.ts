import { Injectable } from '@angular/core';
import { Client } from '../_models/client';
import { RestService } from './rest.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MessageService extends RestService<Client> {

  constructor (private http: Http) {
    super(http, `${environment.API_URL}messages/`);
  }

}
