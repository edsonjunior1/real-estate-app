import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDetailsComponent } from './property-details.component';
import { PropertyDetailsRoutingModule } from './property-details-routing.module';


@NgModule({
  declarations:[
    PropertyDetailsComponent
  ],
  imports: [
    CommonModule,
    PropertyDetailsRoutingModule
  ],
  exports: []
})
export class PropertyDetailsModule { }
