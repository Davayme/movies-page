import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import { MovieDetail } from '../models/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MoviesService{

  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': environment.apiToken
    })
  };

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/popular?language=es-ES&page=${page}`, this.httpOptions);
  }

  getMovieById(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.apiUrl}/${id}?language=es-ES`, this.httpOptions);
  }
}