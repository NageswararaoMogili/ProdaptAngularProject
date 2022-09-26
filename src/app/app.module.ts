import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GlobalService } from './global.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { ReactiveInputComponent } from './reactive-input/reactive-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    HeaderComponent,
    DropdownComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NotfoundComponent,
    ButtonComponent,
    ReactiveInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
