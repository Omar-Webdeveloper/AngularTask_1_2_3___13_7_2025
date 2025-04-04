import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2Component } from './lesson2.component';

describe('Lesson2Component', () => {
  let component: Lesson2Component;
  let fixture: ComponentFixture<Lesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lesson2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
