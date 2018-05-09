import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  @Input() title: string;
  @Input() params: any;
  @ViewChild('basicModal') public basicModal;
  modalClasses: string;
  modalDescription: string;

  show() {
    this.fetchParams();
    this.basicModal.show();
  }

  onInit() {


  }
  fetchParams() {
    this.modalClasses = this.params.modalClasses;
  }

}
