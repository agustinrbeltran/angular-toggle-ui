import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyJsonPipe } from './utils/prettyjson.pipe';


@NgModule({
  declarations: [
    PrettyJsonPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrettyJsonPipe
  ]
})
export class SharedModule { }
