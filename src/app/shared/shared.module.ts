import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyJsonPipe } from './utils/prettyjson.pipe';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    PrettyJsonPipe,
    CustomModalComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    PrettyJsonPipe,
    CustomModalComponent
  ]
})
export class SharedModule { }
