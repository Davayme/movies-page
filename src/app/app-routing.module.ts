import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { MovieDetailComponent } from './features/movie-detail/movie-detail.component';
import { RegisterComponent } from './features/register/register.component';
import { StartComponent } from './features/start/start.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Iniciar sesion' } },
  { path: 'home', component: HomeComponent, data: { title: 'Inicio' } },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'register', component: RegisterComponent, data: { title: 'Registrarse' } },
  {path: 'start', component: StartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
