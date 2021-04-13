import { TestBed } from '@angular/core/testing';

import { GenersService } from './geners.service';

describe('GenersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenersService = TestBed.get(GenersService);
    expect(service).toBeTruthy();
  });
});
