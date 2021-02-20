import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignUpComponent } from './loginSignUp/loginSignUp.component';

const routes: Routes = [
    { path: 'login_signup', component: LoginSignUpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }