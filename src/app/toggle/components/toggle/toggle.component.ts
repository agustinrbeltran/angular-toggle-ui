import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Toggle } from '../../models/toggle.model';
import { CustomModalOptions, Style } from '../../../shared/models/custom-modal-options.model';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() toggle: Toggle;
  @Output() refresh: EventEmitter<any>;
  @ViewChild('test') testModal;
  @ViewChild('edit') editModal;
  testModalOptions: CustomModalOptions; 
  editModalOptions: CustomModalOptions; 

  constructor(){
    this.testModalOptions = new CustomModalOptions().
      withStyle(Style.INFO).
      withStyle(Style.LG);
    this.editModalOptions = new CustomModalOptions().
      withStyle(Style.INFO).
      withStyle(Style.LG);
    this.refresh = new EventEmitter<any>();
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

  refreshParent(){
    this.refresh.next();
  }

}
