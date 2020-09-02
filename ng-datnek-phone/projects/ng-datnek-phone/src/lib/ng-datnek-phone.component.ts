import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from './models/country.model';
import {NgDatnekPhoneService} from './ng-datnek-phone.service';
@Component({
  selector: 'lib-ng-datnek-phone',
  templateUrl: './ng-datnek-phone.component.html',
  styleUrls: [
    './ng-datnek-phone.component.css'
  ]
})
export class NgDatnekPhoneComponent implements OnInit {

  @Output() phoneEventEmitterChange = new EventEmitter<any>();
  @Input() id = 'utils-phone';
  @Input() placeholder: string;
  @Input() errorMessage: string;
  @Input() isErrors: boolean;
  countries: Country[];
  icon: string;
  @Input() style: any;
  currentCountry: Country;
  error: boolean;
  constructor(private service: NgDatnekPhoneService) { }

 ngOnInit(): void {
    this.refreshCountry();
    if (this.placeholder == null) {
      this.placeholder = '+32 000000000';
    }

    if (this.errorMessage == null) {
      this.errorMessage = 'Example of a valid phone: +32 000000000';
    }
  }

  setCountry(value: string): void {
    let code = value.replace(' ', '').substr(0, 2);
    this.currentCountry = this.countries.find(c => c.phone_code === code);

    if (!!!this.currentCountry) {
      code = value.replace(' ', '').substr(0, 3);
      this.currentCountry = this.countries.find(c => c.phone_code === code);
    }

    if (!!!this.currentCountry) {
      code = value.replace(' ', '').substr(0, 4);
      this.currentCountry = this.countries.find(c => c.phone_code === code);
    }
  }

  onChange(e): void {
    const value = e.target.value;
    const exp = '^\\+[0-9]{1,3}([ ]?)([0-9]([ ]?)){6,}$';
    this.setCountry(value);

    if (!!this.currentCountry) {
      this.icon = `flag-icon  flag-icon-${this.currentCountry.code.toLowerCase()}`;
    } else {
      this.icon = '';
      this.error = true;
    }

    if (new RegExp(exp).test(value)) {
      this.error = false;
      this.phoneEventEmitterChange.emit({phone: value, country: this.currentCountry});
    }
  }

  refreshCountry(): void{
    this.countries = this.service.getData();
  }
}
