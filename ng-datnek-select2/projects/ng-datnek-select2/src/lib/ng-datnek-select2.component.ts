import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const $: any;
@Component({
  selector: 'lib-ng-datnek-select2',
  templateUrl: './ng-datnek-select2.component.html',
  styleUrls: [
    './ng-datnek-select2.component.css'
  ]
})
export class NgDatnekSelect2Component implements OnInit, AfterViewInit {

  @Input() id: string;
  @Input() selected: any[];
  @Input() multiple: boolean;
  @Input() isErrors: boolean;
  @Input() isRequire: boolean;
  @Input() data: {id: any , text: any}[];
  className: string;
  @Output() valueChangeEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.className = this.makeid(20);
    // console.log(this.className);
  }

  makeid(length): string {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  ngAfterViewInit(): void {
    const id = $(`.${this.className}`);
    id.select2();
    for (const item of this.data){
      const newOption = new Option(item.text, item.id, false,
        this.selected && this.selected.find(f => f === item.id ));
      id.append(newOption).trigger('change');
    }

    id.change( (e) => {
      const data = id.val();
      // console.log('data is ', data);
      this.valueChangeEventEmitter.emit(data);
    });
  }
}
