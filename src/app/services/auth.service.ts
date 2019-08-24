import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthOptionsI } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string;
  serviceURL: string;
  isAuthenticated: boolean;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.baseURL = 'http://localhost:3000';
    this.serviceURL = 'auth';
  }

  signUp(email: string, password: string) {
    const url = `${this.baseURL}/${this.serviceURL}/signUp`;
    const body = { email, password };

    return this.http.post(url, body);
  }

  login(email: string, password: string) {
    const url = `${this.baseURL}/${this.serviceURL}/login`;
    const body = { email, password };

    return this.http.post(url, body);
  }

  setIsAuthenticated() {
    this.isAuthenticated = true;
  }

  setAuthToken(jwt: string) {
    this.cookieService.set('authToken', jwt);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getAuthToken(): string {
    return this.cookieService.get('authToken');
  }

  getHasAuthToken(): boolean {
    return !!this.getAuthToken();
  }

  getAuthHeaders(): AuthOptionsI {
    const token: string = this.getAuthToken();
    const options = {
      headers: {
        Authentication: token,
      }
    };

    return options;
  }
}
