import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() isEdit = false;

  movieForm: FormGroup;
  editMovie: Movie;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.editMovie = this.moviesService.selectedMovieSubject$.value;

    if (this.isEdit && !this.editMovie) this.router.navigate(['movies']);

    this.initForm();
  }

  initForm() {
    if (!this.isEdit) {
      this.movieForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        year: new FormControl(null, [
          Validators.required,
          Validators.min(1850),
        ]),
        genres: new FormArray([]),
      });
    } else {
      this.movieForm = new FormGroup({
        reviewBody: new FormControl('', Validators.required),
        rating: new FormControl(null, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
      });
    }
  }
  onAddGenre() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.movieForm.get('genres')).push(control);
  }
  getGenresControls() {
    return (this.movieForm.get('genres') as FormArray).controls;
  }

  onFormSubmit() {
    if (this.movieForm.value.invalid) return;

    const movieData: Movie = this.movieForm.value;
    if (!this.isEdit) {
      this.moviesService.createNewMovie(movieData);
      console.log(movieData);
    } else {
      this.moviesService.addRatingAndReview(
        this.editMovie.id,
        movieData.rating,
        movieData.reviewBody
      );
      console.log(movieData);
    }
  }

  onFormReset() {
    this.movieForm.reset();
  }
}
