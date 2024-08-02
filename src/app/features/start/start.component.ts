import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies-service.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: [],
  animations: [
    trigger('movieCardHover', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: 'none'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
      })),
      transition('normal <=> hovered', animate('300ms ease-in-out'))
    ])
  ]
})
export class StartComponent implements OnInit {

  hoverState: { [key: number]: string } = {};
  movies?: Movie;
  currentPage: number = 1;
  totalPages: number = 1; // Total de páginas
  maxPagesToShow: number = 5; // Número máximo de páginas a mostrar

  constructor(
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    const savedPage = localStorage.getItem('currentPage');
    this.currentPage = savedPage ? +savedPage : 1;
    this.loadMovies(this.currentPage);
  }

  loadMovies(page: number) {
    this._movieService.getPopularMovies(page).subscribe((data: any) => {
      this.movies = data;
      this.totalPages = data.total_pages; // Asignar el total de páginas
    });
  }
  
  goToPage(page: number) {
    this.currentPage = page;
    this.savePage();
    this.loadMovies(this.currentPage);
  }

  savePage() {
    localStorage.setItem('currentPage', this.currentPage.toString());
  }

  onMouseEnter(index: number) {
    this.hoverState[index] = 'hovered';
  }

  onMouseLeave(index: number) {
    this.hoverState[index] = 'normal';
  }

  getPages(): number[] {
    const startPage = Math.floor((this.currentPage - 1) / this.maxPagesToShow) * this.maxPagesToShow + 1;
    const endPage = Math.min(startPage + this.maxPagesToShow - 1, this.totalPages);
    return Array(endPage - startPage + 1).fill(0).map((x, i) => startPage + i);
  }

  goToPreviousSet() {
    if (this.currentPage > 1) {
      this.currentPage = Math.max(this.currentPage - this.maxPagesToShow, 1);
      this.loadMovies(this.currentPage);
    }
  }

  goToNextSet() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = Math.min(this.currentPage + this.maxPagesToShow, this.totalPages);
      this.loadMovies(this.currentPage);
    }
  }
}