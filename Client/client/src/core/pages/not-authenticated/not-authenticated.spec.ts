import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthenticated } from './not-authenticated';

describe('NotAuthenticated', () => {
  let component: NotAuthenticated;
  let fixture: ComponentFixture<NotAuthenticated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotAuthenticated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthenticated);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
