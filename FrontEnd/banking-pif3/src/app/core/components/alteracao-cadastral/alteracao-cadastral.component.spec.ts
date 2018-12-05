import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoCadastralComponent } from './alteracao-cadastral.component';

describe('AlteracaoCadastralComponent', () => {
  let component: AlteracaoCadastralComponent;
  let fixture: ComponentFixture<AlteracaoCadastralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteracaoCadastralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoCadastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
