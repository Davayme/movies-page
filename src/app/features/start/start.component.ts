import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies-service.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: []
})
export class StartComponent implements OnInit {

  constructor(private _movieService : MoviesService) { }

  ngOnInit(): void {
    this._movieService.getPopularMovies().subscribe(
      data => {
        console.log(data);
      }
    );
  } 

}
