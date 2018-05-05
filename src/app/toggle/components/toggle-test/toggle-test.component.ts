import { Component, OnInit, Input } from '@angular/core';
import { Toggle } from '../../domain/toggle';
import { ToggleService } from '../../services/toggle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toggle-test',
  templateUrl: './toggle-test.component.html',
  styleUrls: ['./toggle-test.component.scss']
})
export class ToggleTestComponent {

  @Input() toggle: Toggle;
  public constraints: Map<string, string>;

  public res: any;
  public error: any;

  public message: boolean;

  constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

  updateConstraints(constraints: Map<string, string>) {
    this.constraints = constraints;
  }

  testToggle() {
    this.toggleService.testToggle(this.toggle.feature, this.constraints)
      .subscribe(
        (res) => {
          this.res = res;
          this.message = res.enabled;
          this.toastr.success('Toggle test data fetched!');
        },
        (err) => {
          this.error = err;
          this.toastr.error('Error Fetching Toggles data');
        }
      );
  }

}
