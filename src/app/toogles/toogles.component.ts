import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toogles',
  templateUrl: './toogles.component.html',
  styleUrls: ['./toogles.component.scss']
})
export class TooglesComponent implements OnInit {

  res;
  error;
  title = 'Toggles';

  environment = 'latest';
  cluster = 'a';
  application = 'sbc-wdw';
  version = '0.1';

  
  constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getHealthCheck();
  }

  getHealthCheck() {
    this.toggleService.getToggles(this.environment,this.cluster,this.application,this.version)
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
