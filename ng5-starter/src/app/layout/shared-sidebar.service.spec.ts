import { TestBed, inject } from '@angular/core/testing';

import { SharedSidebarService } from './shared-sidebar.service';

describe('SharedSidebarService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SharedSidebarService]
        });
    });

    it('should be created', inject([SharedSidebarService], (service: SharedSidebarService) => {
        expect(service).toBeTruthy();
    }));

    it('should be able to set and get the sidebar using setSidebar and getSidebar method',
        inject([SharedSidebarService], (service: SharedSidebarService) => {

        const sidebarMock = {
            nativeElement: '<sidebar></sidebar>'
        };
        service.setSidebar(sidebarMock);
        const sidebar = service.getSidebar();

        expect(service.setSidebar).toBeTruthy();
        expect(sidebar).toBe(sidebarMock.nativeElement);
    }));
});
