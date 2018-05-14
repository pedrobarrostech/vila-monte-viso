import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Service } from '../_models/service';
import { RestService } from './rest.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ServiceService extends RestService<Service> {

  constructor (private http: Http) {
    super(http, `${environment.API_URL}services/`);
  }

}
