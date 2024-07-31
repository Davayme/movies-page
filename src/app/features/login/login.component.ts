import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  openRegister() {
    window.open(this.router.serializeUrl(this.router.createUrlTree(['/register'])), '_blank');
  }
}
