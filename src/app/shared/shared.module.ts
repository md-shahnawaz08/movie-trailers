import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    AngularFontAwesomeModule,
    ChipsModule
  ],
  exports: [
    ButtonModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    AngularFontAwesomeModule,
    ChipsModule
  ]
})
export class SharedModule { }
