import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.scss']
})
export class TogglesComponent implements OnInit {

  res;
  error;

  environment = 'latest';
  cluster = 'a';
  application = 'sbc-wdw';
  version = '0.1';


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

  clearCache() {
    this.toggleService.invalidateCache()
      .subscribe(
        res => this.toastr.success('Cache Deleted'),
        err => this.toastr.error('Delete cache error')
      );
  }

}
