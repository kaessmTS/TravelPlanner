import { TestBed } from '@angular/core/testing';

import { DalleImageService } from './dalle-image.service';

describe('DalleImageService', () => {
  let service: DalleImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DalleImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
