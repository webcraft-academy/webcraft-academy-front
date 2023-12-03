import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUserSource = new ReplaySubject<any>(1);

  constructor(private http: HttpClient, private router: Router) {}

  login(login: string | null, password: string | null): Observable<any> {
    const loginData = {
      Username: login,
      Password: password
    };
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
    return this.http.post<any>('https://localhost:7053/Authentication/login', loginData);
  }


  loginTest(login: string, password: string)
  {
    const loginData = {
      Username: login,
      Password: password
    };
    return this.http.post<any>('https://localhost:7053/Ninja/login',loginData).pipe(
      map((response: any) => {
        const user = response;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));
          const tokenPayload = jwtDecode(response.token) as TokenPayload;
          console.log(tokenPayload); // The decoded token payload
          console.log(response.token);
          this.currentUserSource.next(null!);
          this.router.navigate(['genin']);
        }
      })
    )
  }

  logout(): void {
    // Perform any logout logic
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}


interface TokenPayload {
  sub: string;
  exp: number;
  role: string;
  email: string;
  userName: string;
  grade: string;
  
}