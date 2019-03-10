import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrailerRoutingModule } from "./trailer-routing.module";
import { TrailerComponent } from "./trailer/trailer.component";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { MultiSelectModule } from "primeng/multiselect";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ChipsModule } from "primeng/chips";

@NgModule({
  declarations: [TrailerComponent, MovieCardComponent],
  imports: [
    CommonModule,
    TrailerRoutingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    AngularFontAwesomeModule,
    ChipsModule
  ]
})
export class TrailerModule {}
