import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToggleFormComponent } from './test-toggle-form.component';

describe('TestToggleFormComponent', () => {
  let component: TestToggleFormComponent;
  let fixture: ComponentFixture<TestToggleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestToggleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestToggleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
