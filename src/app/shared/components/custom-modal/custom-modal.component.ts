import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Input() title: string;
  @Input() buttonLabel: string;  
  
  constructor() { }

  ngOnInit() {
  }

}
