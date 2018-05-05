import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from '../../services/toggle.service';
import { TogglesResponse } from '../../domain/toggles-response';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.scss']
})
export class TogglesComponent implements OnInit {

  public res: TogglesResponse;
  public error: any;

  public environment = 'latest';
  public cluster = 'a';
  public application = 'sbc-wdw';
  public version = '0.1';


  constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getToggles();
  }

  getToggles() {
    this.toggleService.getToggles(this.environment, this.cluster, this.application, this.version)
      .subscribe(
        (res) => {
          this.res = res;
          this.toastr.success('Toggles data fetched!');
        },
        (err) => {
          this.error = err;
          this.toastr.error('Error Fetching Toggles data');
        }
      );
  }

fetchConstraintName(toggleConstraint : any) {
  if (toggleConstraint != null) {
    const constraintProps:any = Object.keys(toggleConstraint);
    return constraintProps;
  } else {
    return "";
  }
}

fetchStatusClass(data:any){
 if(data.enabled===true){return "fa fa-toggle-on";} else {return "fa fa-toggle-off";};
}
  clearCache() {
    this.toggleService.invalidateCache()
      .subscribe(
        res => this.toastr.success('Cache Deleted'),
        err => this.toastr.error('Delete cache error')
      );
  }

}
