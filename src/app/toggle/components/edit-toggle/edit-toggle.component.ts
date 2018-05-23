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
  enabled;

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
    if (this.toggle.type == 'on-off') 
      this.enabled = this.toggle.enabled;
  }

  updateSelectedType(value:string){
    this.type = value;
  }

  updateConstraints(constraints: Map<string, string>) {
    this.constraints = constraints;
  }

  updateSelectedOnOffState(enabled:boolean){
    this.enabled = enabled;
  }

  editToggle(){
    console.log(this.enabled);
    console.log(this.constraints);
  }

}
