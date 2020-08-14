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
                template: "<div class=\"position-relative\">\n  <select class=\"form-control\"\n          [id]=\"id\"\n          [ngClass]=\"{'when-icon': !!currentCountry}\"\n          [style]=\"style\"\n          (change)=\"onChange($event)\">\n    <option disabled selected value=\"\">\n      {{placeholder}}\n    </option>\n    <option [value]=\"country.code\" *ngFor=\"let country of countries\"> {{country.name}}</option>\n  </select>\n  <i class=\"icon\" [ngClass]=\"icon\"></i>\n</div>\n\n<!--div class=\"position-relative\">\n  <div [id]=\"'icon-'+id\"></div>\n  <select\n    [id]=\"id\"\n    [style]=\"style\"\n    class=\"select2 form-control\"\n    (change)=\"onChange($event)\"\n    name=\"threads-icon\"></select>\n</div-->\n",
                styles: [".select2{background-clip:padding-box!important;border:1px solid #ced4da!important;border-radius:.25rem!important;color:#495057!important;display:block!important;font-size:1rem!important;font-weight:400!important;height:calc(1.5em + .75rem + 2px)!important;line-height:1.5!important;padding:.375rem .75rem!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;width:100%!important}.select2-container .select2-selection--single{background-color:transparent!important;border:none!important}.icon{height:15px;padding-left:33px;position:absolute;top:10px;width:20px}.when-icon{padding-left:31px}.when-icon option{padding-left:inherit}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC9zcmMvbGliL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFaEYsK0JBQStCO0FBUy9CLE1BQU0sT0FBTyw4QkFBOEI7SUFVekMsWUFBb0IsNEJBQTBEO1FBQTFELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFQcEUsOEJBQXlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxPQUFFLEdBQUcsZUFBZSxDQUFDO0lBTW9ELENBQUM7SUFHbkYsUUFBUTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5RSxDQUFDO0lBRUQsbUNBQW1DO0lBQzdCLG1CQUFtQjs7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRixDQUFDO0tBQUE7SUFHRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN4QixPQUFRLHdCQUF3QixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWdCO1FBQ3RCLE9BQVEsd0JBQXdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQUs7UUFDbEIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsNkJBQTZCO0lBQy9CLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBQztRQUNSLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxvdEJBQXdEOzthQUl6RDs7O1lBVk8sNEJBQTRCOzs7d0NBY2pDLE1BQU07aUJBQ04sS0FBSzswQkFDTCxLQUFLO29CQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0RhdG5la0NvdW50cnlTZWxlY3RTZXJ2aWNlfSBmcm9tICcuL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC5zZXJ2aWNlJztcbmltcG9ydCB7Q291bnRyeX0gZnJvbSAnLi9jb3VudHJ5Lm1vZGVsJztcbi8vIGltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5nLWRhdG5lay1zZWxlY3QtY291bnRyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3QuY29tcG9uZW50LmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0RhdG5la0NvdW50cnlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQE91dHB1dCgpIGNvdW50cnlFdmVudEVtaXR0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50cnk+KCk7XG4gIEBJbnB1dCgpIGlkID0gJ3V0aWxzLWNvdW50cnknO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgaWNvbjogc3RyaW5nO1xuICBjdXJyZW50Q291bnRyeTogQ291bnRyeTtcbiAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0RhdG5la0NvdW50cnlTZWxlY3RTZXJ2aWNlOiBOZ0RhdG5la0NvdW50cnlTZWxlY3RTZXJ2aWNlKSB7IH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuYnVpbGRTZWxlY3QyKCk7XG4gICAgdGhpcy5yZWZyZXNoQ291bnRyeSgpO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6ICdTZWxlY3QgYSBjb3VudHJ5JztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG4gIGFzeW5jIHJlZnJlc2hDb3VudHJ5QXN5bmMoKXtcbiAgICB0aGlzLmNvdW50cmllcyA9IGF3YWl0IHRoaXMubmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZS5nZXRDb3VudHJ5KCkudG9Qcm9taXNlKCk7XG4gIH1cblxuXG4gIHJlZnJlc2hDb3VudHJ5KCk6IHZvaWR7XG4gICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLm5nRGF0bmVrQ291bnRyeVNlbGVjdFNlcnZpY2UuZ2V0RGF0YSgpO1xuICB9XG5cbiAgZ2V0T3B0aW9uKGNvdW50cnk6IENvdW50cnkpOiBzdHJpbmcge1xuICAgIHJldHVybiAgYGZsYWctaWNvbiAgZmxhZy1pY29uLSR7Y291bnRyeS5jb2RlLnRvTG93ZXJDYXNlKCl9ICR7Y291bnRyeS5uYW1lfWA7XG4gIH1cblxuICBnZXRJY29uKGNvdW50cnk6IENvdW50cnkpOiBzdHJpbmcge1xuICAgIHJldHVybiAgYGZsYWctaWNvbiAgZmxhZy1pY29uLSR7Y291bnRyeS5jb2RlLnRvTG93ZXJDYXNlKCl9YDtcbiAgfVxuXG4gIHNldEN1cnJlbnRJY29uKHZhbHVlKTogdm9pZCB7XG4gICAgLy8gY29uc3QgaWNvbklkID0gJyNpY29uLScgKyB0aGlzLmlkO1xuICAgIHRoaXMuY3VycmVudENvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKGMgPT4gYy5jb2RlID09PSB2YWx1ZSk7XG4gICAgdGhpcy5pY29uID0gdGhpcy5nZXRJY29uKHRoaXMuY3VycmVudENvdW50cnkpO1xuICAgIHRoaXMuY291bnRyeUV2ZW50RW1pdHRlckNoYW5nZS5lbWl0KHRoaXMuY3VycmVudENvdW50cnkpO1xuICAgIC8vICQoaWNvbklkKS5odG1sKHRoaXMuaWNvbik7XG4gIH1cblxuICBvbkNoYW5nZShlKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldEN1cnJlbnRJY29uKHZhbHVlKTtcbiAgfVxuXG4gIC8qXG4gIGJ1aWxkU2VsZWN0MigpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hDb3VudHJ5KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gJCgnLnNlbGVjdDInKTtcblxuICAgIGZvciAoY29uc3QgY291bnRyeSBvZiB0aGlzLmNvdW50cmllcykge1xuICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgaWQ6IGNvdW50cnkuY29kZSxcbiAgICAgICAgdGV4dDogdGhpcy5nZXRPcHRpb24oY291bnRyeSlcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2VsZWN0b3Iuc2VsZWN0Mih7XG4gICAgICBkYXRhOiBvcHRpb25zLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcbiAgICAgIGVzY2FwZU1hcmt1cChtYXJrdXApIHtcbiAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0b3IudmFsKCk7XG4gICAgdGhpcy5zZXRDdXJyZW50SWNvbih2YWx1ZSk7XG4gIH1cblxuICAgKi9cblxufVxuIl19