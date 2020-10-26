import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComboboxComponent } from './autocomplete-combobox.component';

describe('AutocompleteComboboxComponent', () => {
  let component: AutocompleteComboboxComponent;
  let fixture: ComponentFixture<AutocompleteComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
