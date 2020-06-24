import { TestBed } from '@angular/core/testing';

import { CargarmodulosGuard } from './cargarmodulos.guard';

describe('CargarmodulosGuard', () => {
  let guard: CargarmodulosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CargarmodulosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
