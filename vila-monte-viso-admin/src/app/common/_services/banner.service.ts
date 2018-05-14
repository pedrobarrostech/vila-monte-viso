import { Injectable } from '@angular/core';
import { Banner } from '../_models/banner';
import { RestService } from './rest.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class BannerService extends RestService<Banner> {

  constructor (private http: Http) {
    super(http, `${environment.API_URL}banners/`);
  }

}
