import { Component, Input, ViewChild } from '@angular/core';
import { Toggle } from '../../domain/toggle';
import { CustomModalOptions, Style } from '../../../shared/domain/custom-modal-options';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() toggle: Toggle;
  @ViewChild('test') testModal;
  @ViewChild('edit') editModal;
  testModalOptions: CustomModalOptions; 
  editModalOptions: CustomModalOptions; 

  constructor(){
    this.testModalOptions = new CustomModalOptions().
      withStyle(Style.INFO).
      withStyle(Style.LG).
      hideFooter();
    this.editModalOptions = new CustomModalOptions().
      withStyle(Style.INFO).
      withStyle(Style.LG).
      hideFooter();
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

  showEditModal() {
    this.editModal.show();
  }

  showTestModal() {
    this.testModal.show();
  }

}
