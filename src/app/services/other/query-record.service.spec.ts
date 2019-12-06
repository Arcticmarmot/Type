import { TestBed } from '@angular/core/testing';

import { QueryRecordService } from './query-record.service';

describe('QueryRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryRecordService = TestBed.get(QueryRecordService);
    expect(service).toBeTruthy();
  });
});
