import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent {

  @Output() selectedValue: EventEmitter<string>;
  @Input() selectValues:any;
  @Input() defaultValue:string;

  constructor() { 
    this.selectedValue = new EventEmitter<string>();
  }

  selectValue(value:string){
    this.selectedValue.next(value);
  }

}
