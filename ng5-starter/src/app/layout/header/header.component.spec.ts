import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedSidebarService } from '../shared-sidebar.service';

class SharedSidebarServiceMock {
    setSidebar() {}
    getSidebar() {}
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          HeaderComponent
      ],
      providers: [
          {
              provide: SharedSidebarService,
              useClass: SharedSidebarServiceMock
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class to sidebar when hamClick method is called',
    inject([SharedSidebarService], (service: SharedSidebarService) => {
    spyOn(service, 'getSidebar').and.callFake(() => {
        const sidebar = document.createElement('div');
        return sidebar;
    });

    component.hamClick();

    expect(service.getSidebar).toHaveBeenCalled();
  }));

  it('should add class and remove class to sidebar when hamClick method is called twice',
    inject([SharedSidebarService], (service: SharedSidebarService) => {
    spyOn(service, 'getSidebar').and.callFake(() => {
        const sidebar = document.createElement('div');
        return sidebar;
    });

    component.hamClick();
    fixture.detectChanges();
    component.hamClick();
    expect(service.getSidebar).toHaveBeenCalled();
    expect(component.hamButtonIconIndex).toEqual(0);
  }));
});
