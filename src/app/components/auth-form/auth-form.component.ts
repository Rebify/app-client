import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthI, LoginResponseI } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  isLoginMode: boolean;
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.isLoginMode = true;
    this.authForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {}

  onLogin(formValue: AuthI) {
    const { email, password } = formValue;

    this.authService
      .login(email, password)
      .subscribe((data: LoginResponseI) => {
        this.authService.setAuthToken(data.token);
        this.router.navigate(['/panel']);
      });
  }

  onSubmit(formValue: AuthI): void {
    const { email, password } = formValue;

    this.authService
      .signUp(email, password)
      .subscribe(() => {
        this.onLogin(formValue);
      });
  }

  changeAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
