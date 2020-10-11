import { TestBed } from '@angular/core/testing';

import { ApplicationUserGroupService } from './application-user-group.service';

describe('ApplicationUserGroupService', () => {
  let service: ApplicationUserGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationUserGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
