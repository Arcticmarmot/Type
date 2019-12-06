import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizeGuard } from './authorize.guard';

describe('UploadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizeGuard]
    });
  });

  it('should ...', inject([AuthorizeGuard], (guard: AuthorizeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
