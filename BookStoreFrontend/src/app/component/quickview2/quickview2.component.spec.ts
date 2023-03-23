import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quickview2Component } from './quickview2.component';

describe('Quickview2Component', () => {
  let component: Quickview2Component;
  let fixture: ComponentFixture<Quickview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quickview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quickview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
