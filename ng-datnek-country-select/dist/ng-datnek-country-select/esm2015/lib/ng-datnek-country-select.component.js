import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';
// import * as $ from 'jquery';
export class NgDatnekCountrySelectComponent {
    constructor(ngDatnekCountrySelectService) {
        this.ngDatnekCountrySelectService = ngDatnekCountrySelectService;
        this.countryEventEmitterChange = new EventEmitter();
        this.id = 'utils-country';
    }
    ngOnInit() {
        // this.buildSelect2();
        this.refreshCountry();
        this.placeholder = this.placeholder ? this.placeholder : 'Select a country';
    }
    // tslint:disable-next-line:typedef
    refreshCountryAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.countries = yield this.ngDatnekCountrySelectService.getCountry().toPromise();
        });
    }
    refreshCountry() {
        this.countries = this.ngDatnekCountrySelectService.getData();
    }
    getOption(country) {
        return `flag-icon  flag-icon-${country.code.toLowerCase()} ${country.name}`;
    }
    getIcon(country) {
        return `flag-icon  flag-icon-${country.code.toLowerCase()}`;
    }
    setCurrentIcon(value) {
        // const iconId = '#icon-' + this.id;
        this.currentCountry = this.countries.find(c => c.code === value);
        this.icon = this.getIcon(this.currentCountry);
        this.countryEventEmitterChange.emit(this.currentCountry);
        // $(iconId).html(this.icon);
    }
    onChange(e) {
        const value = e.target.value;
        this.setCurrentIcon(value);
    }
}
NgDatnekCountrySelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-datnek-select-country',
                template: "<div class=\"position-relative\">\r\n  <select class=\"form-control\"\r\n          [id]=\"id\"\r\n          [(ngModel)]=\"country\"\r\n          [ngClass]=\"{'when-icon': !!currentCountry,\r\n          'is-invalid': isErrors}\"\r\n          [style]=\"style\"\r\n          (change)=\"onChange($event)\">\r\n    <option disabled selected value=\"\">\r\n      {{placeholder}}\r\n    </option>\r\n    <option [value]=\"country.code\" *ngFor=\"let country of countries\"> {{country.name}}</option>\r\n  </select>\r\n  <i class=\"icon\" [ngClass]=\"icon\"></i>\r\n</div>\r\n\r\n<!--div class=\"position-relative\">\r\n  <div [id]=\"'icon-'+id\"></div>\r\n  <select\r\n    [id]=\"id\"\r\n    [style]=\"style\"\r\n    class=\"select2 form-control\"\r\n    (change)=\"onChange($event)\"\r\n    name=\"threads-icon\"></select>\r\n</div-->\r\n",
                styles: [".select2{background-clip:padding-box!important;border:1px solid #ced4da!important;border-radius:.25rem!important;color:#495057!important;display:block!important;font-size:1rem!important;font-weight:400!important;height:calc(1.5em + .75rem + 2px)!important;line-height:1.5!important;padding:.375rem .75rem!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;width:100%!important}.select2-container .select2-selection--single{background-color:transparent!important;border:none!important}.icon{height:15px;padding-left:33px;position:absolute;top:13px;width:20px}.when-icon{padding-left:31px}.when-icon option{padding-left:inherit}"]
            },] }
];
NgDatnekCountrySelectComponent.ctorParameters = () => [
    { type: NgDatnekCountrySelectService }
];
NgDatnekCountrySelectComponent.propDecorators = {
    countryEventEmitterChange: [{ type: Output }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    isErrors: [{ type: Input }],
    country: [{ type: Input }],
    style: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC9zcmMvbGliL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFaEYsK0JBQStCO0FBUy9CLE1BQU0sT0FBTyw4QkFBOEI7SUFhekMsWUFBb0IsNEJBQTBEO1FBQTFELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFUcEUsOEJBQXlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxPQUFFLEdBQUcsZUFBZSxDQUFDO0lBUW9ELENBQUM7SUFHbkYsUUFBUTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5RSxDQUFDO0lBRUQsbUNBQW1DO0lBQzdCLG1CQUFtQjs7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRixDQUFDO0tBQUE7SUFHRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN4QixPQUFRLHdCQUF3QixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWdCO1FBQ3RCLE9BQVEsd0JBQXdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQUs7UUFDbEIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsNkJBQTZCO0lBQy9CLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBQztRQUNSLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw0MEJBQXdEOzthQUl6RDs7O1lBVk8sNEJBQTRCOzs7d0NBZWpDLE1BQU07aUJBQ04sS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFJTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ0RhdG5la0NvdW50cnlTZWxlY3RTZXJ2aWNlfSBmcm9tICcuL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb3VudHJ5fSBmcm9tICcuL2NvdW50cnkubW9kZWwnO1xyXG4vLyBpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uZy1kYXRuZWstc2VsZWN0LWNvdW50cnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1xyXG4gICAgJy4vbmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5jc3MnXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdEYXRuZWtDb3VudHJ5U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG5cclxuICBAT3V0cHV0KCkgY291bnRyeUV2ZW50RW1pdHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q291bnRyeT4oKTtcclxuICBASW5wdXQoKSBpZCA9ICd1dGlscy1jb3VudHJ5JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlzRXJyb3JzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcclxuICBjb3VudHJpZXM6IENvdW50cnlbXTtcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgY3VycmVudENvdW50cnk6IENvdW50cnk7XHJcbiAgQElucHV0KCkgc3R5bGU6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRGF0bmVrQ291bnRyeVNlbGVjdFNlcnZpY2U6IE5nRGF0bmVrQ291bnRyeVNlbGVjdFNlcnZpY2UpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmJ1aWxkU2VsZWN0MigpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ291bnRyeSgpO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogJ1NlbGVjdCBhIGNvdW50cnknO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcclxuICBhc3luYyByZWZyZXNoQ291bnRyeUFzeW5jKCl7XHJcbiAgICB0aGlzLmNvdW50cmllcyA9IGF3YWl0IHRoaXMubmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZS5nZXRDb3VudHJ5KCkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVmcmVzaENvdW50cnkoKTogdm9pZHtcclxuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5uZ0RhdG5la0NvdW50cnlTZWxlY3RTZXJ2aWNlLmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbihjb3VudHJ5OiBDb3VudHJ5KTogc3RyaW5nIHtcclxuICAgIHJldHVybiAgYGZsYWctaWNvbiAgZmxhZy1pY29uLSR7Y291bnRyeS5jb2RlLnRvTG93ZXJDYXNlKCl9ICR7Y291bnRyeS5uYW1lfWA7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uKGNvdW50cnk6IENvdW50cnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICBgZmxhZy1pY29uICBmbGFnLWljb24tJHtjb3VudHJ5LmNvZGUudG9Mb3dlckNhc2UoKX1gO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudEljb24odmFsdWUpOiB2b2lkIHtcclxuICAgIC8vIGNvbnN0IGljb25JZCA9ICcjaWNvbi0nICsgdGhpcy5pZDtcclxuICAgIHRoaXMuY3VycmVudENvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKGMgPT4gYy5jb2RlID09PSB2YWx1ZSk7XHJcbiAgICB0aGlzLmljb24gPSB0aGlzLmdldEljb24odGhpcy5jdXJyZW50Q291bnRyeSk7XHJcbiAgICB0aGlzLmNvdW50cnlFdmVudEVtaXR0ZXJDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRDb3VudHJ5KTtcclxuICAgIC8vICQoaWNvbklkKS5odG1sKHRoaXMuaWNvbik7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRDdXJyZW50SWNvbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gIGJ1aWxkU2VsZWN0MigpOiB2b2lkIHtcclxuICAgIHRoaXMucmVmcmVzaENvdW50cnkoKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gJCgnLnNlbGVjdDInKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgdGhpcy5jb3VudHJpZXMpIHtcclxuICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICBpZDogY291bnRyeS5jb2RlLFxyXG4gICAgICAgIHRleHQ6IHRoaXMuZ2V0T3B0aW9uKGNvdW50cnkpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZWxlY3Rvci5zZWxlY3QyKHtcclxuICAgICAgZGF0YTogb3B0aW9ucyxcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcclxuICAgICAgZXNjYXBlTWFya3VwKG1hcmt1cCkge1xyXG4gICAgICAgIHJldHVybiBtYXJrdXA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0b3IudmFsKCk7XHJcbiAgICB0aGlzLnNldEN1cnJlbnRJY29uKHZhbHVlKTtcclxuICB9XHJcblxyXG4gICAqL1xyXG5cclxufVxyXG4iXX0=