import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  private moviesService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  selectedMovieSubject$ = this.moviesService.selectedMovieSubject$;

  selectedMovie: Movie;
  movieId: string;

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];

    this.moviesService.getMovieById(this.movieId);
  }

  onEditClick() {
    this.moviesService.onEditMovie();
  }
}
