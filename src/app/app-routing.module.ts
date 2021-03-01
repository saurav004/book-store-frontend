import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginSignUpComponent } from './components/loginSignUp/loginSignUp.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './components/forgotPassword/forgotPassword.component';


const routes: Routes = [
    { path: 'login_signup', component: LoginSignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forgot_password', component: ForgotPasswordComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }