import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lib-ng-datnek-map',
  templateUrl: './ng-datnek-map.component.html',
  styleUrls: [
    './ng-datnek-map.component.css'
  ]
})
export class NgDatnekMapComponent implements OnInit {

  @Output() countryEventEmitterChange = new EventEmitter<any>();
  @Input() id = 'utils-country';
  @Input() placeholder = 'Address';
  @Input() isErrors: boolean;
  @Input() style: any;
  constructor() { }

  ngOnInit(): void {
  }

  openModal(e): void {

  }
}
