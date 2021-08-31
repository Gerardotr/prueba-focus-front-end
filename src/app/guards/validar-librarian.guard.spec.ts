import { TestBed } from '@angular/core/testing';

import { ValidarLibrarianGuard } from './validar-librarian.guard';

describe('ValidarLibrarianGuard', () => {
  let guard: ValidarLibrarianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarLibrarianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
