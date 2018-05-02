import { AppComponent } from './app.component';
import { TooglesComponent } from './toogles/toogles.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BodyComponent } from './layout/body/body.component';
import { ContentComponent } from './layout/content/content.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TooglesComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
