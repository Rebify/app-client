import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string;
  serviceURL: string;
  isAuthenticated: boolean;

  constructor(
    private http: HttpClient,
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
}
