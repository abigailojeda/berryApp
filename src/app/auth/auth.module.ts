import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule, 
    AuthRoutingModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
