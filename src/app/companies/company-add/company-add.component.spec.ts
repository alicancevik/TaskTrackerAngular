import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddComponent } from './company-add.component';

describe('CompanyAddComponent', () => {
  let component: CompanyAddComponent;
  let fixture: ComponentFixture<CompanyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
