import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgDatnekCountrySelectService} from './ng-datnek-country-select.service';
import {Country} from './country.model';

@Component({
  selector: 'lib-ng-datnek-country-select',
  templateUrl: './ng-datnek-country-select.component.html',
  styleUrls: [
    './ng-datnek-country-select.component.css'
  ]
})
export class NgDatnekCountrySelectComponent implements OnInit {


  @Output() countryEventEmitterChange = new EventEmitter<Country>();
  @Input() id = 'utils-country';
  @Input() placeholder: string;
  countries: Country[];
  icon: string;
  currentCountry: Country;
  @Input() style: any;
  constructor(private ngDatnekCountrySelectService: NgDatnekCountrySelectService) { }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    this.countries = await this.ngDatnekCountrySelectService.getCountry().toPromise();
    this.placeholder = this.placeholder ? this.placeholder : 'Select a country';
  }

  onChange(e): void {
    const value = e.target.value;
    this.currentCountry = this.countries.find(c => c.code === value);
    this.icon = `flag-icon  flag-icon-${value.toLowerCase()}`;
    this.countryEventEmitterChange.emit(this.currentCountry);
  }
}
