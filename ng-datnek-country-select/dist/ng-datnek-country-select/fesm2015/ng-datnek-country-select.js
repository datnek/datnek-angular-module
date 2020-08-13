import { ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Component, Output, Input, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { __awaiter } from 'tslib';
import { CommonModule } from '@angular/common';

class Country {
    constructor(code, name, phoneCode) {
        this.code = code;
        this.name = name;
        this.phoneCode = phoneCode;
    }
}

class NgDatnekCountrySelectService {
    constructor(http) {
        this.http = http;
        this.url = './data/country.json';
    }
    // tslint:disable-next-line:typedef
    getCountry() {
        return this.http.get(this.url);
    }
}
NgDatnekCountrySelectService.ɵprov = ɵɵdefineInjectable({ factory: function NgDatnekCountrySelectService_Factory() { return new NgDatnekCountrySelectService(ɵɵinject(HttpClient)); }, token: NgDatnekCountrySelectService, providedIn: "root" });
NgDatnekCountrySelectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgDatnekCountrySelectService.ctorParameters = () => [
    { type: HttpClient }
];

class NgDatnekCountrySelectComponent {
    constructor(ngDatnekCountrySelectService) {
        this.ngDatnekCountrySelectService = ngDatnekCountrySelectService;
        this.countryEventEmitterChange = new EventEmitter();
        this.id = 'utils-country';
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.countries = yield this.ngDatnekCountrySelectService.getCountry().toPromise();
            this.placeholder = this.placeholder ? this.placeholder : 'Select a country';
        });
    }
    onChange(e) {
        const value = e.target.value;
        this.currentCountry = this.countries.find(c => c.code === value);
        this.icon = `flag-icon  flag-icon-${value.toLowerCase()}`;
        this.countryEventEmitterChange.emit(this.currentCountry);
    }
}
NgDatnekCountrySelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-datnek-country-select',
                template: "<div class=\"position-relative\">\n  <select class=\"select2 form-control\"\n          [id]=\"id\"\n          [style]=\"style\"\n          [ngClass]=\"{'when-icon': !!currentCountry}\"\n          (change)=\"onChange($event)\">\n    <option disabled value=\"\">\n      {{placeholder}}\n    </option>\n    <option [value]=\"country.code\" *ngFor=\"let country of countries\"> {{country.name}}</option>\n  </select>\n  <i class=\"icon\" [ngClass]=\"icon\"></i>\n</div>\n",
                styles: [".select2{background-clip:padding-box!important;border:1px solid #ced4da!important;border-radius:.25rem!important;color:#495057!important;display:block!important;font-size:1rem!important;font-weight:400!important;height:calc(1.5em + .75rem + 2px)!important;line-height:1.5!important;padding:.375rem .75rem!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;width:100%!important}.select2-container .select2-selection--single{background-color:transparent!important;border:none!important}.icon{height:15px;padding-left:33px;position:absolute;top:13px;width:20px}.when-icon{padding-left:24px}.when-icon option{padding-left:inherit}"]
            },] }
];
NgDatnekCountrySelectComponent.ctorParameters = () => [
    { type: NgDatnekCountrySelectService }
];
NgDatnekCountrySelectComponent.propDecorators = {
    countryEventEmitterChange: [{ type: Output }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    style: [{ type: Input }]
};

class NgDatnekCountrySelectModule {
}
NgDatnekCountrySelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgDatnekCountrySelectComponent],
                imports: [
                    CommonModule,
                    HttpClientModule,
                ],
                exports: [NgDatnekCountrySelectComponent]
            },] }
];

/*
 * Public API Surface of ng-datnek-country-select
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Country, NgDatnekCountrySelectComponent, NgDatnekCountrySelectModule, NgDatnekCountrySelectService };
//# sourceMappingURL=ng-datnek-country-select.js.map
