import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CustomModalOptions } from '../../models/custom-modal-options.model';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  @Input() title: string;
  @Input() options: CustomModalOptions;
  @ViewChild('basicModal') basicModal;

  show() {
    this.basicModal.show();
  }

  hide(){
    this.basicModal.hide();
  }

}
