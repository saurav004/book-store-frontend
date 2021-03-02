import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string;
  fieldsOnToolBar = ['book', 'title']
  hide = true;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private snackBar: MatSnackBar, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.token = this.route.snapshot.url[1].path;
    localStorage.setItem("token", this.token);
    this.resetPasswordForm = this.fb.group({
      "newPassword": ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
      "confirmPassword": ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)],
      ],
    }, { validator: this.passwordMatchValidator("newPassword", "confirmPassword") });
  }

  resetPassword() {
    const resetPasswordData = {
      "new_password": this.resetPasswordForm.value["newPassword"]
    }
    this.authenticationService.resetPassword(resetPasswordData).subscribe(response => {
      this.resetPasswordForm.reset();
      this.snackBar.open("password successfully changed", "close", { duration: 2500 });
      this.router.navigate(['/login_signup/']);
    }, error => {
      this.snackBar.open("Password change failed, try again ", "close", { duration: 2500 });
    })
  }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
}
