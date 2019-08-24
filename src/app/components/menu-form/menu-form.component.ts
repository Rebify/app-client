import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuI } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  menuForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.menuForm = this.formBuilder.group({
      name: '',
    });
  }

  ngOnInit() {}

  onSubmit(formValue: MenuI): void {
    const { name } = formValue;
  }
}
