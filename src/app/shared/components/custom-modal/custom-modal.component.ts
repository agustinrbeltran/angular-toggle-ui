import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CustomModalOptions } from '../../domain/custom-modal-options';

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

}
