import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { SharedSidebarService } from '../../services/shared-sidebar.service';

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
