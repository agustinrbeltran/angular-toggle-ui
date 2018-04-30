import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WdwTooglesComponent } from './wdw-toogles/wdw-toogles.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BodyComponent } from './layout/body/body.component';
import { ContentComponent } from './layout/content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    WdwTooglesComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
