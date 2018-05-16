import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToggleComponent } from './edit-toggle.component';

describe('EditToggleComponent', () => {
  let component: EditToggleComponent;
  let fixture: ComponentFixture<EditToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
