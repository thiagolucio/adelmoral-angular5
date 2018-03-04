import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucoesComponent } from './construcoes.component';

describe('ConstrucoesComponent', () => {
  let component: ConstrucoesComponent;
  let fixture: ComponentFixture<ConstrucoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrucoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
