import { HttpClient } from '@angular/common/http';
export declare class NgDatnekCountrySelectService {
    private http;
    url: string;
    constructor(http: HttpClient);
    getCountry(): import("rxjs").Observable<any[]>;
}
