import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBancoComponent } from './home-banco.component';

describe('HomeBancoComponent', () => {
  let component: HomeBancoComponent;
  let fixture: ComponentFixture<HomeBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
