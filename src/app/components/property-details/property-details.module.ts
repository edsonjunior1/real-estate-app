import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PropertyDetailsComponent } from './property-details.component';
import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations:[
    PropertyDetailsComponent
  ],
  imports: [
    CommonModule,
    PropertyDetailsRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: []
})
export class PropertyDetailsModule { }
