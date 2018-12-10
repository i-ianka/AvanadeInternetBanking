import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCadastroComponent } from './alterar-cadastro.component';

describe('AlterarCadastroComponent', () => {
  let component: AlterarCadastroComponent;
  let fixture: ComponentFixture<AlterarCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
