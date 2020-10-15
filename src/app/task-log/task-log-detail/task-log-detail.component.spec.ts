import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLogDetailComponent } from './task-log-detail.component';

describe('TaskLogDetailComponent', () => {
  let component: TaskLogDetailComponent;
  let fixture: ComponentFixture<TaskLogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
