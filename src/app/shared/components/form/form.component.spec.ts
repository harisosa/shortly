import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.link_form = new FormGroup({
      link: new FormControl('', [Validators.required]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit link value and reset form if form is valid', () => {
    const testLink = 'https://example.com';
    component.link_form.controls['link'].setValue(testLink);

    spyOn(component.submit_action, 'emit');
    component.onSubmit();

    expect(component.submit_action.emit).toHaveBeenCalledWith(testLink);
    expect(component.link_form.value.link).toBe(null);
  });

  it('should mark link as touched if form is invalid', () => {
    component.link_form.controls['link'].setValue(''); // setting empty value

    spyOn(component.link_form.controls['link'], 'markAsTouched');
    component.onSubmit();

    expect(
      component.link_form.controls['link'].markAsTouched
    ).toHaveBeenCalled();
  });
});
