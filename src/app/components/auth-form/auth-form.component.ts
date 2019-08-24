import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthI  } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      email: '',
      password: '',
    });

  }

  onSubmit(formValue: AuthI): void {
    console.log(formValue);
  }

  ngOnInit() {}
}
