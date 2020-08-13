import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgDatnekCountrySelectService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = '/assets/data/country.json';
  }


  // tslint:disable-next-line:typedef
  getCountry() {
    return this.http.get<any[]>(this.url);
  }
}
