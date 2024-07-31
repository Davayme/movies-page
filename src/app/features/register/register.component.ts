import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 formRegister: FormGroup;

 constructor(private form: FormBuilder){
  this.formRegister = this.form.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]]
  });
 }
}
