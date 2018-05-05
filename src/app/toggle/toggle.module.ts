import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TogglesComponent } from './components/toggles/toggles.component';
import { ToggleService } from './services/toggle.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ToggleTestComponent } from './components/toggle-test/toggle-test.component';
import { ConstraintsFormComponent } from './components/constraints-form/constraints-form.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
    declarations: [
        TogglesComponent,
        ToggleTestComponent,
        ConstraintsFormComponent,
        ToggleComponent
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
