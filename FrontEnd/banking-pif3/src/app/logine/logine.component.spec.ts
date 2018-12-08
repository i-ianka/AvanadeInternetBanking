import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogineComponent } from './logine.component';

describe('LogineComponent', () => {
  let component: LogineComponent;
  let fixture: ComponentFixture<LogineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
