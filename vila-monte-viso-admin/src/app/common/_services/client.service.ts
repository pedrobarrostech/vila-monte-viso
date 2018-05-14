import { Injectable } from '@angular/core';
import { Client } from '../_models/client';
import { RestService } from './rest.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService  extends RestService<Client> {

  constructor (private http: Http) {
    super(http, `${environment.API_URL}clients/`);
  }

}
