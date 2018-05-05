import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyJsonPipe } from './utils/prettyjson.pipe';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OnOffIconComponent } from './components/on-off-icon/on-off-icon.component';


@NgModule({
  declarations: [
    PrettyJsonPipe,
    CustomModalComponent,
    OnOffIconComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    PrettyJsonPipe,
    CustomModalComponent,
    OnOffIconComponent
  ]
})
export class SharedModule { }
