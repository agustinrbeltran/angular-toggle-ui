import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffIconComponent } from './on-off-icon.component';

describe('OnOffIconComponent', () => {
  let component: OnOffIconComponent;
  let fixture: ComponentFixture<OnOffIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOffIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
