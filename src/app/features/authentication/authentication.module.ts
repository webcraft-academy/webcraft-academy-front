import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxedLoginComponent } from './boxed-login/boxed-login.component';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';



@NgModule({
  declarations: [
    
  
    LoginPageComponent,
            SubscriptionPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BoxedLoginComponent
  ]
})
export class AuthenticationModule { }
