import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';
import { Observable, map } from 'rxjs';
import { BASE_URL } from '../../constants/core.constants';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  fetchMovies(
    page: number = 0
  ): Observable<{ movies: Movie[]; totalPages: number }> {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get(`${BASE_URL}/movies`, { params }).pipe(
      map((value: any) => ({
        movies: value.content as Movie[],
        totalPages: value.totalPages as number,
      }))
    );
  }

  fetchMovieById(id: string) {
    return this.http
      .get(`${BASE_URL}/movies/${id}`)
      .pipe(map((value) => value as Movie));
  }

  postNewMovie(newMovie: Movie) {
    return this.http
      .post(`${BASE_URL}/movies/create`, newMovie)
      .pipe(map((value) => value as Movie));
  }

  reviewMovie(id: string, review: string) {
    return this.http
      .post(`${BASE_URL}/movies/${id}/review`, { reviewBody: review })
      .pipe(map((value) => value as Movie));
  }
  rateMovie(id: string, rating: number) {
    return this.http
      .post(`${BASE_URL}/movies/${id}/rate`, { rating })
      .pipe(map((value) => value as Movie));
  }
}
