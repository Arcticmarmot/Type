import { TestBed } from '@angular/core/testing';

import { ReAuthorizeService } from './re-authorize.service';

describe('ReloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReAuthorizeService = TestBed.get(ReAuthorizeService);
    expect(service).toBeTruthy();
  });
});
