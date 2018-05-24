import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyJsonPipe } from './utils/prettyjson.pipe';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { OnOffButtonComponent } from './components/on-off-button/on-off-button.component';

@NgModule({
  declarations: [
    PrettyJsonPipe,
    CustomModalComponent,
    SelectFormComponent,
    OnOffButtonComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    PrettyJsonPipe,
    CustomModalComponent,
    SelectFormComponent,
    OnOffButtonComponent
  ]
})
export class SharedModule { }
