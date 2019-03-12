import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import Texts from '@app/constants/texts';
import { MoviesService } from '@app/services/movies.service';
import * as _ from 'lodash';
import { Movie } from '@app/models/movie';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit, OnDestroy {
  texts = Texts;
  nowShowing = true;
  languages: DropdownOption[] = [];
  selectedLanguages: string[] = [];
  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  selectedMovie: Movie = new Movie();
  sortByPopularity: true;
  sortByOptions: DropdownOption[] = [
    { label: this.texts.FRESH, value: false },
    { label: this.texts.POPULAR, value: true }
  ];
  splitIndex = 0;
  selectedGenres: string[] = [];
  genres: DropdownOption[] = [
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Biography', value: 'Biography' },
    { label: 'Classic', value: 'Classic' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Family', value: 'Family' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'History', value: 'History' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Musical', value: 'Musical' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Period', value: 'Period' },
    { label: 'Psychological', value: 'Psychological' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Sci-Fi', value: 'Sci-Fi' },
    { label: 'Social', value: 'Social' },
    { label: 'Sports', value: 'Sports' },
    { label: 'Suspense', value: 'Suspense' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'War', value: 'War' }
  ];
  safeUrl: SafeResourceUrl;
  destroy$: Subject<boolean> = new Subject();

  constructor(
    private moviesService: MoviesService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService
      .getMovies(this.nowShowing)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        response => {
          this.languages = _.map(response[0], language => ({
            label: language,
            value: language
          }));
          this.allMovies = _.sortBy(
            Object.values(response[1]),
            (movie: Movie) =>
              this.sortByPopularity ? movie.userCount : new Date(movie.ShowDate)
          );
          this.filterMovies();
        },
        error => { }
      );
  }

  genreIncludes(genres: string, selectedGenres: string[]): boolean {
    for (const genre of selectedGenres) {
      if (genres.includes(genre)) {
        return true;
      }
    }
    return false;
  }

  fetchComingSoon() {
    if (this.nowShowing) {
      this.nowShowing = false;
      this.getMovies();
    }
  }

  fetchNowShowing() {
    if (!this.nowShowing) {
      this.nowShowing = true;
      this.getMovies();
    }
  }

  filterMovies() {
    this.selectedMovie = new Movie();
    this.filteredMovies = _.filter(this.allMovies, (movie: Movie) => {
      let languageWise: boolean;
      let genreWise: boolean;
      if (!this.selectedLanguages.length) {
        languageWise = true;
      } else {
        languageWise = this.selectedLanguages.includes(movie.EventLanguage);
      }
      if (!this.selectedGenres.length) {
        genreWise = true;
      } else {
        genreWise = this.genreIncludes(movie.EventGenre, this.selectedGenres);
      }
      return languageWise && genreWise;
    });
  }

  clearFilter() {
    this.selectedMovie = new Movie();
    this.selectedGenres = [];
    this.selectedLanguages = [];
    this.filteredMovies = this.allMovies;
  }

  removeFilter(type: string, elem: string) {
    if (type === 'language') {
      this.selectedLanguages = _.filter(
        this.selectedLanguages,
        lang => lang !== elem
      );
    } else {
      this.selectedGenres = _.filter(
        this.selectedGenres,
        genre => genre !== elem
      );
    }
    this.filterMovies();
  }

  sortMovies() {
    this.allMovies = _.sortBy(this.allMovies, (movie: Movie) =>
      this.sortByPopularity ? movie.userCount : new Date(movie.ShowDate)
    );
    this.filterMovies();
  }

  playTrailer(movie: Movie, pre: number, i: number, elem: ElementRef) {
    let perRow: number;
    if (window.innerWidth >= 992) {
      perRow = 6;
    } else if (window.innerWidth >= 768) {
      perRow = 4;
    } else if (window.innerWidth >= 576) {
      perRow = 3;
    } else {
      perRow = 2;
    }
    this.splitIndex = pre + i - ((pre + i) % perRow);
    this.selectedMovie = movie;
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(movie.TrailerURL.replace('watch?v=', 'embed\/') + '?autoplay=1');
    if (elem) {
      elem.nativeElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
  }
}
