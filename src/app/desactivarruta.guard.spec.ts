import { TestBed } from '@angular/core/testing';

import { DesactivarrutaGuard } from './desactivarruta.guard';

describe('DesactivarrutaGuard', () => {
  let guard: DesactivarrutaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesactivarrutaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
