import { TestBed } from '@angular/core/testing';

import { AuthUploadService } from './auth-upload.service';

describe('AuthUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUploadService = TestBed.get(AuthUploadService);
    expect(service).toBeTruthy();
  });
});
