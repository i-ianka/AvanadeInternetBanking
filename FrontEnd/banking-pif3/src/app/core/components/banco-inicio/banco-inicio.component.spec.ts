import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoInicioComponent } from './banco-inicio.component';

describe('BancoInicioComponent', () => {
  let component: BancoInicioComponent;
  let fixture: ComponentFixture<BancoInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
