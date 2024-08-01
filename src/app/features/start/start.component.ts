import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies-service.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: []
})
export class StartComponent implements OnInit {

  movies?: Movie;

  constructor(private _movieService: MoviesService) { }

  ngOnInit(): void {
    this._movieService.getPopularMovies().subscribe(
      data => {
        this.movies = data;
      }
    );
  }
}
