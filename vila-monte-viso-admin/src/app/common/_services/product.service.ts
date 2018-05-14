import { Injectable } from '@angular/core';
import { Product } from '../_models/product';
import { RestService } from './rest.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductService extends RestService<Product> {

  constructor (private http: Http) {
    super(http, `${environment.API_URL}products/`);
  }

}
