import { TestBed } from '@angular/core/testing';

import { DispatchService } from './dispatch.service';

describe('DispatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispatchService = TestBed.get(DispatchService);
    expect(service).toBeTruthy();
  });
});
