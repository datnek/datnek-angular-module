import { NgModule } from '@angular/core';
import { NgDatnekCountrySelectComponent } from './ng-datnek-country-select.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
export class NgDatnekCountrySelectModule {
}
NgDatnekCountrySelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgDatnekCountrySelectComponent],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                ],
                exports: [NgDatnekCountrySelectComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC9zcmMvbGliL25nLWRhdG5lay1jb3VudHJ5LXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBYzNDLE1BQU0sT0FBTywyQkFBMkI7OztZQVR2QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzlDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nRGF0bmVrQ291bnRyeVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmctZGF0bmVrLWNvdW50cnktc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05nRGF0bmVrQ291bnRyeVNlbGVjdENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW05nRGF0bmVrQ291bnRyeVNlbGVjdENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nRGF0bmVrQ291bnRyeVNlbGVjdE1vZHVsZSB7IH1cclxuIl19