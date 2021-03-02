import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatFormFieldModule } from '@angular/material';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
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

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router, private _snackBar: MatSnackBar, private httpService: HttpService) {

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
    if (!this.loginForm.invalid) {
      this.authService.login(loginObject).subscribe((response: any) => {
        if (response) {
          this._snackBar.open("logged in sucessfully ", "close", { duration: 2000 });
          localStorage.setItem('accessToken',response.headers.get('Authorization'));
          this.loginForm.reset();
          this.router.navigate(['/dashboard/']);
        }
        if (response.errors) {
          this._snackBar.open("Login failed", "close", { duration: 2000 });
        }
      }, error => {
        this._snackBar.open("Login failed", "close", { duration: 2000 });
      })
    }
  }

  signUp() {
    const signUpObject = {
      username: this.signUpForm.value["fullName"],
      email: this.signUpForm.value["email"],
      mobile_number: this.signUpForm.value["mobileNumber"],
      password: this.signUpForm.value["password"],
    }
    if (!this.signUpForm.invalid) {
      this.authService.register(signUpObject).subscribe((response: any) => {
        if (response.data) {
          this._snackBar.open("SignUp Successfull", "close", { duration: 2000 });
          this.signUpForm.reset();
          this.isLogin = true;
        }
        if (response.errors) {
          this._snackBar.open("SignUp failed", "close", { duration: 2000 })
        }
      }, error => {
        this._snackBar.open("SignUp failed", "close", { duration: 2000 })
      })
    }
  }

}
