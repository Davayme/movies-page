import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegister: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private form: FormBuilder, private authService: AuthService, private router: Router) {
    this.formRegister = this.form.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  async register() {
    try {
      if (this.formRegister.valid) {
        const { email, password } = this.formRegister.value;
        const UserCredential = await this.authService.sigUpWithEmail(email, password);
        console.log(UserCredential);
        this.successMessage = 'Usuario registrado exitosamente.';
        this.errorMessage = null;
        this.router.navigate(['/login']); // Redirigir a la ruta de login
      }
    } catch (error) {
      this.successMessage = null;
      this.errorMessage = 'Error al registrar el usuario. Inténtalo de nuevo.';
      console.error(error);
    }
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }
}
