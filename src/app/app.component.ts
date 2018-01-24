import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginValidator } from './shared/login.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loginFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginFormGroup = formBuilder.group({
      username: ['', [Validators.required, LoginValidator.shouldContainCodidoes]],
      password: ['', Validators.required]
    });
  }
}
