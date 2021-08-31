import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReserveComponent } from './confirm-reserve.component';

describe('ConfirmReserveComponent', () => {
  let component: ConfirmReserveComponent;
  let fixture: ComponentFixture<ConfirmReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
