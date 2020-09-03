import { EventEmitter, OnInit } from '@angular/core';
import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';
import { Country } from './country.model';
export declare class NgDatnekCountrySelectComponent implements OnInit {
    private ngDatnekCountrySelectService;
    countryEventEmitterChange: EventEmitter<Country>;
    id: string;
    placeholder: string;
    isErrors: boolean;
    country: string;
    countries: Country[];
    icon: string;
    currentCountry: Country;
    style: any;
    constructor(ngDatnekCountrySelectService: NgDatnekCountrySelectService);
    ngOnInit(): void;
    refreshCountryAsync(): Promise<void>;
    refreshCountry(): void;
    getOption(country: Country): string;
    getIcon(country: Country): string;
    setCurrentIcon(value: any): void;
    onChange(e: any): void;
}
