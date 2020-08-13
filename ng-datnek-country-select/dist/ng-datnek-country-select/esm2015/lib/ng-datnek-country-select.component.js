import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';
export class NgDatnekCountrySelectComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC9zcmMvbGliL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFVaEYsTUFBTSxPQUFPLDhCQUE4QjtJQVV6QyxZQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQVBwRSw4QkFBeUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pELE9BQUUsR0FBRyxlQUFlLENBQUM7SUFNb0QsQ0FBQztJQUVuRixtQ0FBbUM7SUFDN0IsUUFBUTs7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLDRCQUE0QixDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7UUFDOUUsQ0FBQztLQUFBO0lBRUQsUUFBUSxDQUFDLENBQUM7UUFDUixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLHdCQUF3QixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLCtkQUF3RDs7YUFJekQ7OztZQVRPLDRCQUE0Qjs7O3dDQWFqQyxNQUFNO2lCQUNOLEtBQUs7MEJBQ0wsS0FBSztvQkFJTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZX0gZnJvbSAnLi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Quc2VydmljZSc7XG5pbXBvcnQge0NvdW50cnl9IGZyb20gJy4vY291bnRyeS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZy1kYXRuZWstY291bnRyeS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vbmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5jc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdEYXRuZWtDb3VudHJ5U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIEBPdXRwdXQoKSBjb3VudHJ5RXZlbnRFbWl0dGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudHJ5PigpO1xuICBASW5wdXQoKSBpZCA9ICd1dGlscy1jb3VudHJ5JztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgY291bnRyaWVzOiBDb3VudHJ5W107XG4gIGljb246IHN0cmluZztcbiAgY3VycmVudENvdW50cnk6IENvdW50cnk7XG4gIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZTogTmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZSkgeyB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb3VudHJpZXMgPSBhd2FpdCB0aGlzLm5nRGF0bmVrQ291bnRyeVNlbGVjdFNlcnZpY2UuZ2V0Q291bnRyeSgpLnRvUHJvbWlzZSgpO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6ICdTZWxlY3QgYSBjb3VudHJ5JztcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuY3VycmVudENvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKGMgPT4gYy5jb2RlID09PSB2YWx1ZSk7XG4gICAgdGhpcy5pY29uID0gYGZsYWctaWNvbiAgZmxhZy1pY29uLSR7dmFsdWUudG9Mb3dlckNhc2UoKX1gO1xuICAgIHRoaXMuY291bnRyeUV2ZW50RW1pdHRlckNoYW5nZS5lbWl0KHRoaXMuY3VycmVudENvdW50cnkpO1xuICB9XG59XG4iXX0=