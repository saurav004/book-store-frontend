import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-loginSignUp',
  templateUrl: './loginSignUp.component.html',
  styleUrls: ['./loginSignUp.component.scss']
})
export class LoginSignUpComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  signUpForm: FormGroup;
  isLogin = true;
  state = 0;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private httpService: HttpService) {

  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });

    this.signUpForm = this.fb.group({
      "email": ['', [Validators.required, Validators.email]],
      "fullName": ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      "password": ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      "mobileNumber": ['', [Validators.required, Validators.pattern("^[+]{1}[0-9]{2}[ ]{0,1}[0-9]{10}$")]]
    })
  }

  switchView(booleanValue: boolean) {
    this.isLogin = booleanValue;
  }

  login() {
    const loginObject = {
      email: this.loginForm.value["email"],
      password: this.loginForm.value["password"],
    }
  }

  signUp() {
    const signUpObject = {
      email: this.signUpForm.value["email"],
      mobile_number: this.signUpForm.value["mobileNumber"],
      username: this.signUpForm.value["firstName"],
      password: this.signUpForm.value["password"],
    }
    this.httpService.postRequest('auth/register/', signUpObject).subscribe((response) => {
      this._snackBar.open("SignUp Successfull", "close", { duration: 2000 });
      this.signUpForm.reset();
      this.isLogin = true;
    }), error => {
      this._snackBar.open("SignUp failed", "close", { duration: 2000 })
    }
  }

}
