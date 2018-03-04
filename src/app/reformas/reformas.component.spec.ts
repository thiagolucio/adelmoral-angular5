import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformasComponent } from './reformas.component';

describe('ReformasComponent', () => {
  let component: ReformasComponent;
  let fixture: ComponentFixture<ReformasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReformasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
