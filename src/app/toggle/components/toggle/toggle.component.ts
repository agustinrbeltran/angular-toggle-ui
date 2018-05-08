import { Component, Input, ViewChild } from '@angular/core';
import { Toggle } from '../../domain/toggle';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() toggle: Toggle;
  @ViewChild('test') public testModal;
  @ViewChild('edit') public editModal;

  getKeys(map) {
    return Array.from(map.keys());
  }

  showEditModal(){
    this.editModal.show();
  }

  showTestModal(){
    this.testModal.show();
  }

}
