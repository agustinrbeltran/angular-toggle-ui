import { Component, Input } from '@angular/core';
import { Toggle } from '../../domain/toggle';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() toggle:Toggle;

  getKeys(map) {
    return Array.from(map.keys());
  }
  
}
