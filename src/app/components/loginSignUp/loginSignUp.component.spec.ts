/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { LoginSignUpComponent } from './loginSignUp.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';

describe('LoginSignUpComponent', () => {
  let component: LoginSignUpComponent;
  let fixture: ComponentFixture<LoginSignUpComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSignUpComponent,
        HeaderComponent,
        DashboardComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignUpComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("form"));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check users email address is invalid for invalid email entered', () => {
    let email = component.signUpForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');
    expect(email.errors['email']).toBeTruthy();
  })

  it('should check valid email name is entered', () => {
    let email = component.signUpForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  })

  it('should check users password is invalid', () => {
    let password = component.signUpForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();
    password.setValue('abc');
  })

  it('should check valid password is entered', () => {
    let password = component.signUpForm.controls['password'];
    password.setValue('password');
    expect(password.errors).toBeNull();
  })

  it('should check users firstName is invalid', () => {
    let fullName = component.signUpForm.controls['fullName'];
    expect(fullName.valid).toBeFalsy();
    expect(fullName.pristine).toBeTruthy();
    expect(fullName.errors['required']).toBeTruthy();
    fullName.setValue('abc');
  })

  it('should check valid firstName is entered', () => {
    let fullName = component.signUpForm.controls['fullName'];
    fullName.setValue('fullName');
    expect(fullName.errors).toBeNull();
  })

  it('should check form is valid or not when no values entered', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  })
  it('should check users mobileNumber is invalid', () => {
    let mobileNumber = component.signUpForm.controls['mobileNumber'];
    expect(mobileNumber.valid).toBeFalsy();
    expect(mobileNumber.pristine).toBeTruthy();
    expect(mobileNumber.errors['required']).toBeTruthy();
    mobileNumber.setValue('abc');
  })

  it('should check valid phoneNumber is entered', () => {
    let mobileNumber = component.signUpForm.controls['mobileNumber'];
    mobileNumber.setValue('+91 9284543205');
    expect(mobileNumber.errors).toBeNull();
  })

  it('should check form is valid or not when values  entered', () => {
    let password = component.signUpForm.controls['password'];
    let fullName = component.signUpForm.controls['fullName'];
    let mobileNumber = component.signUpForm.controls['mobileNumber'];
    let email = component.signUpForm.controls['email'];
    email.setValue('abc@gmail.com');
    password.setValue('password');
    fullName.setValue('fullName');
    mobileNumber.setValue('+91 9284543205');
    expect(component.signUpForm.valid).toBeTruthy();
  })

  it('should check form is submititted', () => {
    expect(component.signUpForm.valid).toBeFalsy();
    let btn = fixture.debugElement.query(By.css('#submitButton'));
    fixture.detectChanges()
    expect(el.querySelector('button').disabled).toBeTruthy();
    component.signUpForm.controls['password'].setValue('password');
    component.signUpForm.controls['fullName'].setValue('firstName');
    component.signUpForm.controls['mobileNumber'].setValue('+91 9284543205');
    component.signUpForm.controls['email'].setValue('abc@gmail.com');
    expect(component.signUpForm.valid).toBeTruthy();
    fixture.detectChanges();
    expect(el.querySelector('button').disabled).toBeFalsy();
  })
});
