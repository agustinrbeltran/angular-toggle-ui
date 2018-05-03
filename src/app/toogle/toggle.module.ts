import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { TogglesComponent } from './components/toggles/toggles.component';

import { ToggleService } from './services/toggle.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        TogglesComponent
    ],
    imports: [
        CommonModule,
        ToastrModule.forRoot({
            closeButton: true,
            positionClass: 'toast-bottom-right'
        }),
        HttpClientModule,
        SharedModule
    ],
    providers: [
        ToggleService
    ]
})
export class ToggleModule { }
