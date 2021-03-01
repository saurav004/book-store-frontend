import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm : FormGroup;
  constructor(private fb : FormBuilder, private authService: AuthenticationService, private httpService:HttpService) { }
  fieldsOnToolBar = [ 'book', 'title' ] 
  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      "email": ['', [Validators.required, Validators.email]],
    });

  }

  sendLink(){

  }

}
