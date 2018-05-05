import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { TogglesComponent } from './components/toggles/toggles.component';

import { ToggleService } from './services/toggle.service';
import { SharedModule } from '../shared/shared.module';
import { TestToggleFormComponent } from './components/test-toggle-form/test-toggle-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TogglesComponent,
        TestToggleFormComponent
    ],
    imports: [
        FormsModule,
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
