import { Injectable } from '@angular/core';

@Injectable()
export class SharedSidebarService {

    public sidebarElement: any;

    constructor() { }

    setSidebar(sidebar) {
        this.sidebarElement = sidebar.nativeElement;
    }

    getSidebar() {
        return this.sidebarElement;
    }

}
