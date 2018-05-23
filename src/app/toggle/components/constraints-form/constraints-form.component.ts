import { Component, Output, EventEmitter, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-constraints-form',
  templateUrl: './constraints-form.component.html',
  styleUrls: ['./constraints-form.component.scss']
})
export class ConstraintsFormComponent implements OnDestroy,OnInit {

  @Output() constraintsEvent: EventEmitter<Map<string, Array<string>>>;
  @Input() constraints: Map<string, Array<string>>;
  name: string;
  value: string;

  constructor(){
    this.constraintsEvent = new EventEmitter<Map<string, Array<string>>>();
    this.constraints = new Map<string, Array<string>>();
    this.name = '';
    this.value = '';
  }

  ngOnInit(){
    this.constraintsEvent.next(this.constraints);
  }

  ngOnDestroy() {
    this.constraints.clear();
  }

  addContraint() {
    if (this.constraints.get(this.name) != null){
      this.constraints.get(this.name).push(this.value);
    }else{
      this.constraints.set(this.name, new Array<string>(this.value));
    }
    this.name = "";
    this.value = "";
  }

  removeConstraint(key: string) {
    this.constraints.delete(key);
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

}
