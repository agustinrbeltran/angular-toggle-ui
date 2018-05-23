import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyJsonPipe } from './utils/prettyjson.pipe';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SelectFormComponent } from './components/select-form/select-form.component';

@NgModule({
  declarations: [
    PrettyJsonPipe,
    CustomModalComponent,
    SelectFormComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    PrettyJsonPipe,
    CustomModalComponent,
    SelectFormComponent
  ]
})
export class SharedModule { }
