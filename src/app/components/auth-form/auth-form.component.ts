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
  authForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.authForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(formValue: AuthI): void {
    this.authService
      .signUp(formValue.email, formValue.password)
      .subscribe(() => {
        this.authService
          .login(formValue.email, formValue.password)
          .subscribe((data: LoginResponseI) => {
            this.authService.setIsAuthenticated();
            this.authService.setAuthToken(data.token);
            this.router.navigate(['/panel']);
          });
      });
  }

  ngOnInit() {}
}
