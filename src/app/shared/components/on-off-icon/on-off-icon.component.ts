import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-on-off-icon',
  templateUrl: './on-off-icon.component.html',
  styleUrls: ['./on-off-icon.component.scss']
})
export class OnOffIconComponent implements OnInit {

  @Input() enabled: boolean;
  public class: string;

  ngOnInit() {
    this.class = this.enabled ? "fa fa-toggle-on" : "fa fa-toggle-off";
  }
}


