import { TestBed } from '@angular/core/testing';

import { ReloginService } from './relogin.service';

describe('ReloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReloginService = TestBed.get(ReloginService);
    expect(service).toBeTruthy();
  });
});
