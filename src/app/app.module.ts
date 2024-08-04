import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import {
    CarouselCaptionComponent,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective
} from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
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
        EmojiGenresDirective,
        CarrouselComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ThemeDirective, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselCaptionComponent, RouterLink
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideFirebaseApp(() => initializeApp(environment.firebase)), // Usar environment.firebase
        provideAuth(() => getAuth()),
        provideAnalytics(() => getAnalytics()),
        ScreenTrackingService,
        UserTrackingService,
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase())
      ]
})
export class AppModule { }
