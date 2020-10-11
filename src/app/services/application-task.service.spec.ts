import { TestBed } from '@angular/core/testing';

import { ApplicationTaskService } from './application-task.service';

describe('ApplicationTaskService', () => {
  let service: ApplicationTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
