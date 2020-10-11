import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupAddComponent } from './user-group-add.component';

describe('UserGroupAddComponent', () => {
  let component: UserGroupAddComponent;
  let fixture: ComponentFixture<UserGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
