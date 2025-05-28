import { TestBed } from '@angular/core/testing';

import { Top10Service } from './top10.service';

describe('Top10Service', () => {
  let service: Top10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
