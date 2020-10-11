import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersWidgetComponent } from './dashboard-users-widget.component';

describe('DashboardUsersWidgetComponent', () => {
  let component: DashboardUsersWidgetComponent;
  let fixture: ComponentFixture<DashboardUsersWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUsersWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUsersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
