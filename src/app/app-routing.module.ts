import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "trailer",
    loadChildren: "./trailer/trailer.module#TrailerModule"
  },
  {
    path: "",
    redirectTo: "/trailer",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
