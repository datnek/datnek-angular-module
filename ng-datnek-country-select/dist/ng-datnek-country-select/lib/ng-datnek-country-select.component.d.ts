import { EventEmitter, OnInit } from '@angular/core';
import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';
import { Country } from './country.model';
export declare class NgDatnekCountrySelectComponent implements OnInit {
    private ngDatnekCountrySelectService;
    countryEventEmitterChange: EventEmitter<Country>;
    id: string;
    placeholder: string;
    countries: Country[];
    icon: string;
    currentCountry: Country;
    style: any;
    constructor(ngDatnekCountrySelectService: NgDatnekCountrySelectService);
    ngOnInit(): Promise<void>;
    onChange(e: any): void;
}
