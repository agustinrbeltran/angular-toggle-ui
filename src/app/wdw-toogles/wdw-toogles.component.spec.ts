import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdwTooglesComponent } from './wdw-toogles.component';

describe('WdwTooglesComponent', () => {
  let component: WdwTooglesComponent;
  let fixture: ComponentFixture<WdwTooglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdwTooglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdwTooglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
