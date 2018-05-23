import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-on-off-icon',
  templateUrl: './on-off-icon.component.html',
  styleUrls: ['./on-off-icon.component.scss']
})
export class OnOffIconComponent implements OnInit {
  
  @Output() selectedValue: EventEmitter<boolean>;
  @Input() enabled: boolean;
  public class: string;

  constructor(){
    this.selectedValue = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.setClass();
  }

  changeState(){
    this.enabled = !this.enabled;
    this.setClass();
    this.selectedValue.next(this.enabled);
  }

  setClass(){
    this.class = this.enabled ? "fa fa-toggle-on" : "fa fa-toggle-off";
  }
}


