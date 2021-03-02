import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private snackbar: MatSnackBar, private httpService: HttpService) { }
  fieldsOnToolBar = ['book', 'title']
  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      "email": ['', [Validators.required, Validators.email]],
    });

  }

  sendLink() {
    const sendLinkObject = {
      "email": this.forgotPasswordForm.value["email"],
    }
    this.authService.sendResetPasswordLink(sendLinkObject).subscribe(response => {
      this.snackbar.open("Activation email sent", "close", { duration: 2000 })
    },error=>{
      this.snackbar.open("Something went wrong try again", "close", { duration: 2000 })
    });
  }

}
