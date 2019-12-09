import { TestBed } from '@angular/core/testing';

import { DeleteArticleService } from './delete-article.service';

describe('DeleteArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteArticleService = TestBed.get(DeleteArticleService);
    expect(service).toBeTruthy();
  });
});
