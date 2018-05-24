import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from '../../services/toggle.service';
import { Toggle } from '../../models/toggle.model';

@Component({
    selector: 'app-toggle-container',
    templateUrl: './toggle-container.component.html',
    styleUrls: ['./toggle-container.component.scss']
})
export class ToggleContainerComponent implements OnInit {

    toggles: Toggle[];
    error: any;
    message:string;
    
    constructor(private toggleService: ToggleService, private toastr: ToastrService) {
        this.message ='';
     }

    ngOnInit() {
        this.getToggles();
    }

    getToggles() {
        this.toggleService.getToggles()
            .subscribe(
                (res) => {
                    this.toggles = this.toggleService.getToggleArray(res);
                    this.toggleService.response = res;
                    this.toastr.success('Toggles data fetched!');
                },
                (err) => {
                    this.error = err;
                    this.message = err.error;
                    this.toastr.error('Error Fetching Toggles data');
                }
            );
    }
}
