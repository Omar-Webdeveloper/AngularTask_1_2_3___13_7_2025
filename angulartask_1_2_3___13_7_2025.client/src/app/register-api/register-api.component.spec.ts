import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAPIComponent } from './register-api.component';

describe('RegisterAPIComponent', () => {
  let component: RegisterAPIComponent;
  let fixture: ComponentFixture<RegisterAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
