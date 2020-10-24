import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusAddComponent } from './task-status-add.component';

describe('TaskStatusAddComponent', () => {
  let component: TaskStatusAddComponent;
  let fixture: ComponentFixture<TaskStatusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStatusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
