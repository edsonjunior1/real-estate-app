import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { ListingComponent } from "./listing.component";
import { FilterComponent } from './components/filter/filter.component';
import { ListingRoutingModule } from './listing-routing.module';

@NgModule({
  declarations:[
    ListingComponent,
    FilterComponent
  ],
  imports:[
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    ListingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ListingModule { }
