import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  moviesSubject$ = this.moviesService.moviesSubject$;
  nextButtonSubject$ = this.moviesService.nextButtonSubject$;
  previousButtonSubject$ = this.moviesService.previousButtonSubject$;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.moviesService.getMovies();
  }

  goToMovieDetails(id: string) {
    this.router.navigate(['movies', 'details', id]);
  }

  loadNextPage() {
    this.moviesService.getNextPage();
  }
  loadPreviousPage() {
    this.moviesService.getPreviousPage();
  }
}
