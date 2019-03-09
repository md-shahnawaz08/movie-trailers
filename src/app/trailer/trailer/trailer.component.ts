import { Component, OnInit } from "@angular/core";
import Texts from "@app/constants/texts";
import { MoviesService } from "@app/services/movies.service";
import * as _ from "lodash";

@Component({
  selector: "app-trailer",
  templateUrl: "./trailer.component.html",
  styleUrls: ["./trailer.component.scss"]
})
export class TrailerComponent implements OnInit {
  texts = Texts;
  nowShowing = true;
  languages: DropdownOption[] = [];
  selectedLanguages: string[] = [];
  allMovies: Movie[] = [];
  sortByPopularity: true;
  sortByOptions: DropdownOption[] = [
    { label: this.texts.FRESH, value: false },
    { label: this.texts.POPULAR, value: true }
  ];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies(this.nowShowing).subscribe(response => {
      this.languages = _.map(response[0], language => ({
        label: language,
        value: language
      }));
      this.allMovies = Object.values(response[1]);
    });
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
}
