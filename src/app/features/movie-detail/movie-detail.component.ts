import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDetail } from 'src/app/core/models/movieDetail';
import { MoviesService } from 'src/app/core/services/movies-service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input({required:true}) idMovie: number = 0;
  @Output() closeModal = new EventEmitter<void>();
  detailsMovie?: MovieDetail;
  constructor(private _movieService: MoviesService) { }

  ngOnInit(): void {
    this._movieService.getMovieById(this.idMovie).subscribe((data: any) => {
      this.detailsMovie = data;
    });

  }
  
  close(): void {
    this.closeModal.emit();
  }
}
