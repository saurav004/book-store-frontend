import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginSignUpComponent } from './components/loginSignUp/loginSignUp.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'login_signup', component: LoginSignUpComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }