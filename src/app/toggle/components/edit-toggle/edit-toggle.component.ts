import { Component, OnInit, Input } from '@angular/core';
import { Toggle } from '../../domain/toggle';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss']
})
export class EditToggleComponent implements OnInit {

  @Input() toggle: Toggle;
  selectValues: any;
  type:string;
  constraints: Map<string, string>;

  constructor() {
    this.selectValues = [
      { value: 'on-off', label: 'On-Off' },
      { value: 'whitelist', label: 'Whitelist' },
      { value: 'blacklist', label: 'Blacklist' },
    ];
    this.constraints = new Map<string, string>();

  }

  ngOnInit(){
    this.type = this.toggle.type;

  }

  updateSelectedValue(value:string){
    this.type = value;
  }

  updateConstraints(constraints: Map<string, string>) {
    this.constraints = constraints;
  }


  editToggle(){

  }

}
