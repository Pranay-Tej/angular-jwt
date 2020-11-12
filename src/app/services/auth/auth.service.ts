import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Response {
  message: string,
  status: number,
  data: any
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  
  login(email, password): Observable<any> {
    return this.httpClient
      .post(`${environment.api_url}/api/user/login`, {
        email: email,
        password: password,
      })
    // if(res.status == 200){
    //   this.setToken(res.data.token);
    // }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token): void {
    localStorage.setItem('token', token);
  }
}
