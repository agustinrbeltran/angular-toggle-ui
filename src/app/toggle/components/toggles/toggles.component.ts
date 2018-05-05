import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from '../../services/toggle.service';
import { Toggle } from '../../domain/toggle';
import { Deployment } from '../../domain/deployment';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.scss']
})
export class TogglesComponent implements OnInit {

  public toggles: Toggle[];
  public error: any;

  constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getToggles();
  }

  getToggles() {
    this.toggleService.getToggles()
      .subscribe(
        (res) => {
          this.toggles = this.toggleService.getToggleArray(res);
          this.toastr.success('Toggles data fetched!');
        },
        (err) => {
          this.error = err;
          this.toastr.error('Error Fetching Toggles data');
        }
      );
  }
  
}
