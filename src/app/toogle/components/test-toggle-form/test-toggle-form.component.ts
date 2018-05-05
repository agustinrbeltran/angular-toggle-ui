import { Component, OnInit, Input } from '@angular/core';
import { Toggle } from '../../domain/toggle';

@Component({
  selector: 'app-test-toggle-form',
  templateUrl: './test-toggle-form.component.html',
  styleUrls: ['./test-toggle-form.component.scss']
})
export class TestToggleFormComponent implements OnInit {

  @Input() toggle:Toggle;

  public constraints: Map<string,string>;

  public feature:string;
  public type:string;

  public name:string;
  public value:string;

  ngOnInit() {
    this.feature = this.toggle.feature;
    this.type = this.toggle.type;
    this.constraints = new Map<string,string>();
  }

  onAddConstraint(){

    this.constraints.set(this.name,this.value);
    this.name = "";
    this.value = "";

  }

}
