import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OProjetoComponent } from './o-projeto.component';

describe('OProjetoComponent', () => {
  let component: OProjetoComponent;
  let fixture: ComponentFixture<OProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
