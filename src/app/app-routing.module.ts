import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WdwTooglesComponent } from './wdw-toogles/wdw-toogles.component';
const routes: Routes = [
  {
    path: '',
    component: WdwTooglesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
