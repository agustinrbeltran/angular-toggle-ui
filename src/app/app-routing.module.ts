import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooglesComponent } from './toogles/toogles.component';
const routes: Routes = [
  {
    path: '',
    component: TooglesComponent
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
