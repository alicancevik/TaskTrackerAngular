import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUserComponent } from './application-user.component';

describe('ApplicationUserComponent', () => {
  let component: ApplicationUserComponent;
  let fixture: ComponentFixture<ApplicationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
