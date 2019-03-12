import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerRoutingModule } from './trailer-routing.module';
import { TrailerComponent } from './trailer/trailer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SharedModule } from '@app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { ScrollToDirective } from './scroll-to.directive';


@NgModule({
  declarations: [TrailerComponent, MovieCardComponent, ScrollToDirective],
  imports: [
    CommonModule,
    TrailerRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class TrailerModule {
  constructor() {
    library.add(faPlayCircle);
  }
}
