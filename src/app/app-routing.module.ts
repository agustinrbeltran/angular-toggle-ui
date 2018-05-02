import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TogglesComponent } from './toogle/components/toggles/toggles.component';

const routes: Routes = [
  {
    path: '',
    component: TogglesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
