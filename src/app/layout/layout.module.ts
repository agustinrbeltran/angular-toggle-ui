import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { ContentComponent } from './components/content/content.component';
import { SharedSidebarService } from './services/shared-sidebar.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BodyComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BodyComponent,
        ContentComponent
    ],
    providers: [
        SharedSidebarService
    ],
})
export class LayoutModule { }
