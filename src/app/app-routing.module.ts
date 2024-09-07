import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { StartComponent } from './features/start/start.component';
import { SeriesComponent } from './features/series/series.component';
import { MovieComponent } from './features/movie/movie.component';
import { PeopleComponent } from './features/people/people.component';
import { RegisterComponent } from './features/register/register.component';
import { authGuard, publicGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Iniciar sesion' }, canActivate: [publicGuard] },
  {path: 'register', component: RegisterComponent, data: { title: 'Registrarse' }, canActivate: [publicGuard]},
  { path: '', component: HomeComponent, data: { title: 'Inicio' }, children: [
    {path: '', component: StartComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'movies', component: MovieComponent},
    {path: 'people', component: PeopleComponent}
  ], canActivate : [authGuard]
 },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
