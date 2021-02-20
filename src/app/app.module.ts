import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginSignUpComponent } from './loginSignUp/loginSignUp.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatDatepickerModule, MatTooltipModule, MatListModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './services/http.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginSignUpComponent
  ],
  imports: [
    BrowserModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
