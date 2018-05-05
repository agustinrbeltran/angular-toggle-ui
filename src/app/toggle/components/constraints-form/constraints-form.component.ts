import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-constraints-form',
  templateUrl: './constraints-form.component.html',
  styleUrls: ['./constraints-form.component.scss']
})
export class ConstraintsFormComponent implements OnDestroy {

  @Output() const: EventEmitter<Map<string, string>> = new EventEmitter<Map<string, string>>();
  public constraints: Map<string, string> = new Map<string, string>();
  public name = "";
  public value = "";

  addContraint() {
    this.constraints.set(this.name, this.value);
    this.name = "";
    this.value = "";
    this.const.next(this.constraints);
  }

  removeConstraint(key: string) {
    this.constraints.delete(key);
    this.const.next(this.constraints);
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

  ngOnDestroy() {
    this.constraints.clear();
  }

}
