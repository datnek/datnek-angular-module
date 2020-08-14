import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgDatnekCountrySelectService} from './ng-datnek-country-select.service';
import {Country} from './country.model';
// import * as $ from 'jquery';

@Component({
  selector: 'lib-ng-datnek-select-country',
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


  ngOnInit(): void {
    // this.buildSelect2();
    this.refreshCountry();
    this.placeholder = this.placeholder ? this.placeholder : 'Select a country';
  }

  // tslint:disable-next-line:typedef
  async refreshCountryAsync(){
    this.countries = await this.ngDatnekCountrySelectService.getCountry().toPromise();
  }


  refreshCountry(): void{
    this.countries = this.ngDatnekCountrySelectService.getData();
  }

  getOption(country: Country): string {
    return  `flag-icon  flag-icon-${country.code.toLowerCase()} ${country.name}`;
  }

  getIcon(country: Country): string {
    return  `flag-icon  flag-icon-${country.code.toLowerCase()}`;
  }

  setCurrentIcon(value): void {
    // const iconId = '#icon-' + this.id;
    this.currentCountry = this.countries.find(c => c.code === value);
    this.icon = this.getIcon(this.currentCountry);
    this.countryEventEmitterChange.emit(this.currentCountry);
    // $(iconId).html(this.icon);
  }

  onChange(e): void {
    const value = e.target.value;
    this.setCurrentIcon(value);
  }

  /*
  buildSelect2(): void {
    this.refreshCountry();
    const options = [];
    const selector = $('.select2');

    for (const country of this.countries) {
      options.push({
        id: country.code,
        text: this.getOption(country)
      });
    }


    selector.select2({
      data: options,
      // tslint:disable-next-line:typedef
      escapeMarkup(markup) {
        return markup;
      }
    });

    const value = selector.val();
    this.setCurrentIcon(value);
  }

   */

}
