import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthI } from '../../interfaces/auth.interface';
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
    private authService: AuthService
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
          .subscribe(() => this.authService.setIsAuthenticated());
      });
  }

  ngOnInit() {}
}
