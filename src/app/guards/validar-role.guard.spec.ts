import { TestBed } from '@angular/core/testing';

import { ValidarRoleGuard } from './validar-role.guard';

describe('ValidarRoleGuard', () => {
  let guard: ValidarRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
