import { Component, Output, EventEmitter, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-constraints-form',
  templateUrl: './constraints-form.component.html',
  styleUrls: ['./constraints-form.component.scss']
})
export class ConstraintsFormComponent implements OnDestroy,OnInit {

  @Output() constraintsEvent: EventEmitter<Map<string, string>>;
  @Input() constraints: Map<string, string>;
  name: string;
  value: string;

  constructor(){
    this.constraintsEvent = new EventEmitter<Map<string, string>>();
    this.constraints = new Map<string, string>();
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
    this.constraints.set(this.name, this.value);
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
