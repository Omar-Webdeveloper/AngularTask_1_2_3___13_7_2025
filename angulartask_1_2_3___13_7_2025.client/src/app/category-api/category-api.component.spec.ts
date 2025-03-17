import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAPIComponent } from './category-api.component';

describe('CategoryAPIComponent', () => {
  let component: CategoryAPIComponent;
  let fixture: ComponentFixture<CategoryAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
