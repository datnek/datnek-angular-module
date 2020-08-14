import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';
export declare class NgDatnekCountrySelectService {
    private http;
    url: string;
    constructor(http: HttpClient);
    getCountry(): import("rxjs").Observable<Country[]>;
    getData(): Country[];
}
