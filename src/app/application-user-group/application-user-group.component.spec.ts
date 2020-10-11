import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUserGroupComponent } from './application-user-group.component';

describe('ApplicationUserGroupComponent', () => {
  let component: ApplicationUserGroupComponent;
  let fixture: ComponentFixture<ApplicationUserGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationUserGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
