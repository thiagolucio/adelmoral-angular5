import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalizacoesComponent } from './legalizacoes.component';

describe('LegalizacoesComponent', () => {
  let component: LegalizacoesComponent;
  let fixture: ComponentFixture<LegalizacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalizacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
