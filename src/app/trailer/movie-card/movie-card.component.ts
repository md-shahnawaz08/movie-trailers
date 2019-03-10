import { Component, Input } from "@angular/core";
import { Movie } from "@app/models/movie";
import Texts from "@app/constants/texts";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent {
  @Input() movie: Movie;

  texts = Texts;
}

