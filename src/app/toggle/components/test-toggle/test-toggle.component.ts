import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Toggle } from '../../domain/toggle';
import { ToggleService } from '../../services/toggle.service';
import { ToastrService } from 'ngx-toastr';
import { CustomModalOptions, Style } from '../../../shared/domain/custom-modal-options';

@Component({
  selector: 'app-test-toggle',
  templateUrl: './test-toggle.component.html',
  styleUrls: ['./test-toggle.component.scss']
})
export class TestToggleComponent {

  @Input() toggle: Toggle;
  @ViewChild('info') infoModal;
  testResultModalOptions: CustomModalOptions;
  constraints: Map<string, Array<string>>;
  message :string;
  //Responses
  res: any;
  error: any;

  constructor(private toggleService: ToggleService, private toastr: ToastrService) { 
    this.message = '';
    this.constraints = new Map<string, Array<string>>();
    this.testResultModalOptions = new CustomModalOptions();
  }

  updateConstraints(constraints: Map<string, Array<string>>) {
    this.constraints = constraints;
  }

  testToggle() {
    this.toggleService.testToggle(this.toggle.feature, this.constraints)
      .subscribe(
        (res) => {
          this.res = res;
          const aux = res.enabled ? 'ENABLED' : 'DISABLED';
          this.message = ' The toggle for those contraints is ' + aux;
          this.testResultModalOptions.withStyle(Style.SUCCESS);
          this.infoModal.show();
          this.toastr.success('Toggle test data fetched!');
        },
        (err) => {
          this.error = err;
          this.message = this.error.error;
          this.testResultModalOptions.withStyle(Style.WARNING);
          this.infoModal.show();
          this.toastr.error('Error Fetching Toggles data');
        }
      );
  }

}
