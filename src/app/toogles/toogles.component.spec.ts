import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglesComponent } from './toogles.component';

describe('TooglesComponent', () => {
  let component: TooglesComponent;
  let fixture: ComponentFixture<TooglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
