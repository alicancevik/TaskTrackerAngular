import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssignComponent } from './task-assign.component';

describe('TaskAssignComponent', () => {
  let component: TaskAssignComponent;
  let fixture: ComponentFixture<TaskAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
