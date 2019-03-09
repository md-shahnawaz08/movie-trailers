import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrailerRoutingModule } from "./trailer-routing.module";
import { TrailerComponent } from "./trailer/trailer.component";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { MultiSelectModule } from "primeng/multiselect";

@NgModule({
  declarations: [TrailerComponent],
  imports: [
    CommonModule,
    TrailerRoutingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule
  ]
})
export class TrailerModule {}
