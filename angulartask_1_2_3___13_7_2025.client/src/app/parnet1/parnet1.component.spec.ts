import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parnet1Component } from './parnet1.component';

describe('Parnet1Component', () => {
  let component: Parnet1Component;
  let fixture: ComponentFixture<Parnet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Parnet1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parnet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
