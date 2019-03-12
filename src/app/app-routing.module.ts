import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DuplicateNumberComponent } from './duplicate-number/duplicate-number.component';

const routes: Routes = [
  {
    path: 'trailer',
    loadChildren: './trailer/trailer.module#TrailerModule'
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'duplicate-number',
    component: DuplicateNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
