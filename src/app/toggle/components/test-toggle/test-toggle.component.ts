import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Toggle } from '../../domain/toggle';
import { ToggleService } from '../../services/toggle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-toggle',
  templateUrl: './test-toggle.component.html',
  styleUrls: ['./test-toggle.component.scss']
})
export class TestToggleComponent {

  @Input() toggle: Toggle;
  @ViewChild('info') public infoModal;
  public constraints: Map<string, string> = new Map<string, string>();
  public message= "";

  //Responses
  public res: any;
  public error: any;
  public message = '';
  testResultModalOptions: object = {
    headerClass: 'modal-success'
  };
  constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

  updateConstraints(constraints: Map<string, string>) {
    this.constraints = constraints;
  }

  testToggle() {
    this.toggleService.testToggle(this.toggle.feature, this.constraints)
      .subscribe(
        (res) => {
          this.res = res;
          const aux = res.enabled ? 'enabled' : 'disable';
          this.message = ' The toggle for those contraints is ' + aux;
          this.infoModal.show();
          this.toastr.success('Toggle test data fetched!');
        },
        (err) => {
          this.error = err;
          this.toastr.error('Error Fetching Toggles data');
        }
      );
  }

}
