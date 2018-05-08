import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToggleContainerComponent } from './toggle/components/toggle-container/toggle-container.component';

const routes: Routes = [
  {
    path: '',
    component: ToggleContainerComponent
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
