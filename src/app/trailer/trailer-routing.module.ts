import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailerComponent } from './trailer/trailer.component';

const routes: Routes = [{ path: '', component: TrailerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailerRoutingModule {}
