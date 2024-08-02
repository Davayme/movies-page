import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService{

  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=es-Es';
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': environment.apiToken
    })
  };

  constructor(private http: HttpClient) { }

  getPopularMovies(page:number = 1): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}&page=${page}`, this.httpOptions);
  }
}