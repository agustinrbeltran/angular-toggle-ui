import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from '../../services/toggle.service';
import { Toggle } from '../../domain/toggle';
import { Deployment } from '../../domain/deployment';

@Component({
    selector: 'app-toggle-container',
    templateUrl: './toggle-container.component.html',
    styleUrls: ['./toggle-container.component.scss']
})
export class ToggleContainerComponent implements OnInit {

    public toggles: Toggle[];
    public error: any;
    mocexample: any = {
        'applicationName': 'sbc-wdw',
        'applicationVersion': '0.1',
        'cluster': 'a',
        'environment': 'latest',
        'toggles': [
            {
                'type': 'blacklist',
                'constraints': {
                    'user': [
                        'CARDD054'
                    ]
                },
                'feature': 'FUTURE_PAYMENT',
                'description': 'Toggle ON to implement rounding method in order to allow setting the payment as a Future Payment'
            },
            {
                'type': 'on-off',
                'enabled': true,
                'feature': 'MAIN_GUEST_DELETION',
                'description': 'Toggle ON to allow main/first guess to be deleted for the first room'
            },
            {
                'type': 'blacklist',
                'constraints': {
                    'day': [
                        'Monday'
                    ]
                },
                'feature': 'XSS_FILTER_FIX',
                'description': 'Toggle ON to allow XSSFilter fix (coexistence with ACSFilter)'
            }
        ]
    };
    
    constructor(private toggleService: ToggleService, private toastr: ToastrService) { }

    ngOnInit() {
        //this.getToggles();
        this.toggles = this.toggleService.getToggleArray(this.mocexample);
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
