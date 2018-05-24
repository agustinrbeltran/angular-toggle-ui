import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toggle } from '../../models/toggle.model';
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from '../../services/toggle.service';
import { TOGGLE_TYPE } from '../../toggle.constants';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss']
})
export class EditToggleComponent implements OnInit {

  @Input() toggle: Toggle;
  @Output() closeModal: EventEmitter<any>;

  selectValues: any;
  
  //Taken from the view
  type: string;
  constraints: Map<string, Array<string>>;
  enabled: boolean;

  constructor(private toggleService: ToggleService, private toastr: ToastrService) {
    this.selectValues = [
      { value: 'on-off', label: 'On-Off' },
      { value: 'whitelist', label: 'Whitelist' },
      { value: 'blacklist', label: 'Blacklist' },
    ];
    this.closeModal = new EventEmitter<any>();
  }

  ngOnInit() {
    this.type = this.toggle.type;
    this.constraints = new Map<string, Array<string>>(this.toggle.constraints);

    if (this.toggle.type == 'on-off')
      this.enabled = this.toggle.enabled;
    else
      this.enabled = false;

  }

  updateSelectedType(value: string): void {
    this.type = value;
  }

  updateConstraints(constraints: Map<string, Array<string>>): void {
    this.constraints = constraints;
  }

  updateSelectedOnOffState(enabled: boolean): void {
    this.enabled = enabled;
  }

  editToggle(): void {
    let toggle: Toggle = this._updateToggle();
    this.toggleService.editToggle(toggle).subscribe(
      (res) => {
        this.closeModal.next();
        this.toastr.success('Toggles data fetched!');
      },
      (err) => {
        this.toastr.error('Error Fetching Toggles data');
      }
    );
  }

  private _updateToggle(): Toggle {
    let toggle = new Toggle(this.type, this.toggle.feature, this.toggle.description);

    switch (this.type) {
      case 'on-off':
        toggle.enabled = this.enabled;
        break;
      default:
        toggle.constraints = new Map<string, Array<string>>(this.constraints);
        break;
    }

    return toggle;
  }

}
