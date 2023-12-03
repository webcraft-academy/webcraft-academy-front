import { Component } from '@angular/core';
import { CoreService } from 'src/app/shared/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../shared/material/material.module';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { TokenPayload, User } from '../models/user';
//import jwtDecode from 'jwt-decode';
import { jwtDecode, InvalidTokenError } from 'jwt-decode';

@Component({
  selector: 'app-boxed-login',
  standalone: true,
  templateUrl: './boxed-login.component.html',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, NgIf],
  styleUrls: ['./boxed-login.component.scss']
})
export class BoxedLoginComponent {
  options = this.settings.getOptions();
  loginStatus: string = '';
  username: string  | null = '';
  password: string  | null = '';
  loginSubscription: Subscription | undefined;
  private userData: User = new User("null", 0, "null", "null", "null", "null");
  constructor(private settings: CoreService, private router: Router, private authService: AuthService, private user: CoreService) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.username = this.form.controls.uname.value;
    this.password = this.form.controls.password.value;
    this.loginSubscription = this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Handle successful login
        this.loginStatus = 'Login successful';
        localStorage.setItem('authToken', response.token);
        console.log(this.loginStatus);
        const tokenPayload = jwtDecode(response.token) as TokenPayload;
        this.userData = tokenPayload;
        console.log("USERDATA: " + this.userData.email)
        console.log(tokenPayload); // The decoded token payload
        console.log(response.token);
        this.user.setUserData(tokenPayload);
        this.router.navigate(['/academy']);
      },
      error: (error) => {
        // Handle login error
        this.loginStatus = 'Invalid credentials';
      }
    });
  }
}
