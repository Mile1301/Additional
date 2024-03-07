import { Injectable } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MoviesApiService } from './api/movies-api.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  currentPage = 0;
  totalPages: number;
  nextButtonSubject$ = new BehaviorSubject<boolean>(false);
  previousButtonSubject$ = new BehaviorSubject<boolean>(true);
  moviesSubject$ = new BehaviorSubject<Movie[]>(null);

  selectedMovieSubject$ = new BehaviorSubject<Movie>(null);

  constructor(
    private router: Router,
    private moviesApiService: MoviesApiService
  ) {
    console.log('Movie service created');
  }

  getMovies() {
    this.moviesApiService.fetchMovies(this.currentPage).subscribe({
      next: (value) => {
        console.log('in the http observable', value);
        const movies = value.movies;
        this.totalPages = value.totalPages;
        this.moviesSubject$.next(movies);
        this.nextButtonSubject$.next(this.isNextButtonDisabled());
        this.previousButtonSubject$.next(this.isPreviousButtonDisabled());
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }

  getMovieById(id: string) {
    this.selectedMovieSubject$.next(null);

    this.moviesApiService.fetchMovieById(id).subscribe({
      next: (value) => {
        this.selectedMovieSubject$.next(value);
      },
      error: (err) => {
        this.router.navigate(['not-found']);
        console.error(err);
      },
    });
  }

  createNewMovie(newMovie: Movie) {
    this.moviesApiService.postNewMovie(newMovie).subscribe({
      next: (value) => {
        this.router.navigate(['movies', 'details', value.id]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onEditMovie() {
    this.router.navigate(['movies', 'edit']);
  }

  getNextPage() {
    if (this.isNextButtonDisabled()) {
      this.currentPage++;
      this.getMovies();
    }
  }

  getPreviousPage() {
    if (this.isPreviousButtonDisabled()) {
      this.currentPage--;
      this.getMovies();
    }
  }

  isNextButtonDisabled(): boolean {
    return this.currentPage < this.totalPages - 1;
  }

  isPreviousButtonDisabled(): boolean {
    return this.currentPage > 0;
  }

  addRatingAndReview(selectedMovie: string, rating: number, review: string) {
    this.moviesApiService.rateMovie(selectedMovie, rating).subscribe({
      next: (value) => {
        this.router.navigate(['movies', 'details', value.id]);

        this.addReview(selectedMovie, review);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  private addReview(selectedMovie: string, review: string) {
    this.moviesApiService.reviewMovie(selectedMovie, review).subscribe({
      next: (value) => {
        this.router.navigate(['movies', 'details', value.id]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
