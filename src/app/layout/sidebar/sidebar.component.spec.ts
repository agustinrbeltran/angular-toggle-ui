import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSidebarService } from '../shared-sidebar.service';
import { SidebarComponent } from './sidebar.component';

class SharedSidebarServiceMock {
    setSidebar() {}
    getSidebar() {}
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          SidebarComponent
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
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
