import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginSignUpComponent } from './components/loginSignUp/loginSignUp.component';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './components/forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './components/resetPassword/resetPassword.component';


const routes: Routes = [
    { path: 'login_signup', component: LoginSignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forgot_password', component: ForgotPasswordComponent },
    { path: "new_password/:token", component: ResetPasswordComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }