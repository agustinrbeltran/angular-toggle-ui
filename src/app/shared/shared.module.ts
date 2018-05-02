import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { ToggleService } from './toggle.service';
import { HttpClientModule } from '@angular/common/http';
import { PrettyJsonPipe } from './prettyjson.pipe';

@NgModule({
  declarations: [
    PrettyJsonPipe
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right'
    }),
    HttpClientModule
  ],
  providers: [
    ToggleService
  ],
  exports: [
    PrettyJsonPipe
  ]
})
export class SharedModule { }
