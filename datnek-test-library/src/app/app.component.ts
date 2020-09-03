import {Component, OnInit} from '@angular/core';
import {Country} from '../../../ng-datnek-country-select/projects/ng-datnek-country-select/src/lib/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  domains: any[];
  skills: any[];
  title = 'datnek-test-library';

  ngOnInit(): void {
    this.domains = [
      {
        id: '1a',
        text: 'Multiple 1'
      },
      {
        id: '2a',
        text: 'Multiple 2'
      },
      {
        id: '3a',
        text: 'Multiple 3'
      },
      {
        id: '4a',
        text: 'Multiple 4'
      }
    ];

    this.skills = [
      {
        id: 1,
        text: 'c#'
      },
      {
        id: 2,
        text: 'Java'
      },
      {
        id: 3,
        text: 'Python'
      },
      {
        id: 4,
        text: 'Asp.net core'
      }
    ];
  }

  onChangeOne(data: any): void {
    console.log('single :', data);
  }

  onChangeTwo(data: any): void {
    console.log('multiple : ', data);
  }

  onCountryListener(country: Country): void {
    console.log('countries : ', country);
  }

  onFileChangeListener(file: any) {
    
  }
}
