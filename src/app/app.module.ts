import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatListModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './services/http.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginSignUpComponent } from './components/loginSignUp/loginSignUp.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewBookComponent } from './components/viewBook/viewBook.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginSignUpComponent,
    DashboardComponent,
    HeaderComponent,
    ViewBookComponent,
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
