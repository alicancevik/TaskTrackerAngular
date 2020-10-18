import { TestBed } from '@angular/core/testing';

import { TaskStatusService } from './task-status.service';

describe('TaskStatusService', () => {
  let service: TaskStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
