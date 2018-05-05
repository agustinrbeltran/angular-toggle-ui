import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleTestComponent } from './toggle-test.component';


describe('ToggleTestComponent', () => {
  let component: ToggleTestComponent;
  let fixture: ComponentFixture<ToggleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
