import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAPIComponent } from './login-api.component';

describe('LoginAPIComponent', () => {
  let component: LoginAPIComponent;
  let fixture: ComponentFixture<LoginAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
