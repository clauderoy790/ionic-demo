import { TestBed } from '@angular/core/testing';

import { NetsuiteService } from './netsuite.service';

describe('NetsuiteService', () => {
  let service: NetsuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetsuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
