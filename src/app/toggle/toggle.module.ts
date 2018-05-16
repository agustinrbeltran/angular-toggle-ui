import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ToggleService } from './services/toggle.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ConstraintsFormComponent } from './components/constraints-form/constraints-form.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { OnOffIconComponent } from './components/on-off-icon/on-off-icon.component';
import { ToggleContainerComponent } from './components/toggle-container/toggle-container.component';
import { TestToggleComponent } from './components/test-toggle/test-toggle.component';
import { EditToggleComponent } from './components/edit-toggle/edit-toggle.component';

@NgModule({
    declarations: [
        ToggleContainerComponent,
        TestToggleComponent,
        ConstraintsFormComponent,
        ToggleComponent,
        OnOffIconComponent,
        EditToggleComponent
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
