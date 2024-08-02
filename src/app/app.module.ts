import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './features/movie-detail/movie-detail.component';
import { RegisterComponent } from './features/register/register.component';
import { MovieComponent } from './features/movie/movie.component';
import { StartComponent } from './features/start/start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeriesComponent } from './features/series/series.component';
import { PeopleComponent } from './features/people/people.component';
import { RatingStarsDirective } from './shared/directives/starts.directive';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmojiGenresDirective } from './shared/directives/emoji-genres.directive';
import { CarrouselComponent } from './features/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieDetailComponent,
    RegisterComponent,
    MovieComponent,
    StartComponent,
    SeriesComponent,
    PeopleComponent,
    RatingStarsDirective,
    EmojiGenresDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
