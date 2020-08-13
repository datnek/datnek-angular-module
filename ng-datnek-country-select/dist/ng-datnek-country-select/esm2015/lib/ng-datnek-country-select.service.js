import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgDatnekCountrySelectService {
    constructor(http) {
        this.http = http;
        this.url = './data/country.json';
    }
    // tslint:disable-next-line:typedef
    getCountry() {
        return this.http.get(this.url);
    }
}
NgDatnekCountrySelectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgDatnekCountrySelectService_Factory() { return new NgDatnekCountrySelectService(i0.ɵɵinject(i1.HttpClient)); }, token: NgDatnekCountrySelectService, providedIn: "root" });
NgDatnekCountrySelectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgDatnekCountrySelectService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Qvc3JjL2xpYi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBS2hELE1BQU0sT0FBTyw0QkFBNEI7SUFHdkMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO0lBQ25DLENBQUM7SUFHRCxtQ0FBbUM7SUFDbkMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpPLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZSB7XG5cbiAgdXJsOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMudXJsID0gJy4vZGF0YS9jb3VudHJ5Lmpzb24nO1xuICB9XG5cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxuICBnZXRDb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPih0aGlzLnVybCk7XG4gIH1cbn1cbiJdfQ==