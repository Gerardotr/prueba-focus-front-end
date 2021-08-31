import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReturnedComponent } from './confirm-returned.component';

describe('ConfirmReturnedComponent', () => {
  let component: ConfirmReturnedComponent;
  let fixture: ComponentFixture<ConfirmReturnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmReturnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
