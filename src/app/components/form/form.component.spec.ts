import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clickButtton() method', () => {
    component.uploadFromGroup = formBuilder.group({
      memoContent: ['hello', Validators.required],
    });
    component.memoId = '12345';
    const memo = {
      id: '12345',
      content: 'hello',
    };
    spyOn(component.upload, 'emit');
    spyOn(component, 'reset');
    component.clickButtton();
    expect(component.upload.emit).toHaveBeenCalledWith(memo);
    expect(component.reset).toHaveBeenCalled();
  });

  it('should call reset() method', () => {
    spyOn(component.uploadFromGroup, 'reset');
    component.reset();
    expect(component.uploadFromGroup.reset).toHaveBeenCalled();
  });
});
