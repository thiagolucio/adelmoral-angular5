import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistoriasComponent } from './vistorias.component';

describe('VistoriasComponent', () => {
  let component: VistoriasComponent;
  let fixture: ComponentFixture<VistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
