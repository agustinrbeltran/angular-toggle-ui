import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wdw-toogles',
  templateUrl: './wdw-toogles.component.html',
  styleUrls: ['./wdw-toogles.component.scss']
})
export class WdwTooglesComponent implements OnInit {

  res;
  error;
  title = 'Toggles';
  environment = 'latest';
  
  constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getHealthCheck();
  }

  getHealthCheck() {
    this.toggleService.getToggles()
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
