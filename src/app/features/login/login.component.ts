import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;
  errorMessage: string | null = null;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  preventSubmit(event: Event): void {
    event.preventDefault();
  }
  async login(): Promise<void> {
    try {
      if (this.formLogin.valid) {
        const { email, password } = this.formLogin.value;
        await this.authService.loginWithEmail(email, password);
        this.router.navigate(['/']);
      }
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message || 'Ocurrió un error al iniciar sesión';
      } else {
        this.errorMessage = 'Ocurrió un error al iniciar sesión';
      }
      console.error(error);
    }
  }

  openRegister() {
    window.open(this.router.serializeUrl(this.router.createUrlTree(['/register'])), '_blank');
  }

  async signUpWithGoogle(): Promise<void> {
    try {
      const result = await this.authService.signInWithGoogleProvider();
      if (result.user) {
        this.router.navigateByUrl('/');
      }
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message || 'Ocurrió un error al iniciar sesión';
      } else {
        this.errorMessage = 'Ocurrió un error al iniciar sesión';
      }
      console.error(error);
    }
  }

  async signUpWithGithub(): Promise<void> {
    try {
      const result = await this.authService.signInWithGithubProvider();
      if (result.user) {
        this.router.navigateByUrl('/');
      }
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message || 'Ocurrió un error al iniciar sesión';
      } else {
        this.errorMessage = 'Ocurrió un error al iniciar sesión';
      }
      console.error(error);
    }
  }

  async signUpWithFacebook(): Promise<void> {
    try {
      const result = await this.authService.signInWithFacebookProvider();
      if (result.user) {
        this.router.navigateByUrl('/');
      }
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message || 'Ocurrió un error al iniciar sesión';
      } else {
        this.errorMessage = 'Ocurrió un error al iniciar sesión';
      }
      console.error(error);
    }
  }
}
