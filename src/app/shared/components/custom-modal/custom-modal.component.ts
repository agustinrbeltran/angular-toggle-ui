import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  @Input() title: string;
  @ViewChild('basicModal') public basicModal;

  show(){
    this.basicModal.show();
  }
  
}
