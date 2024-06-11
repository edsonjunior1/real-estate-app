import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PropertyDetailsComponent } from './property-details.component';
import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteModalService } from './components/favorite-modal/favorite-modal.service';
import { FavoriteModalComponent } from './components/favorite-modal/favorite-modal.component';


@NgModule({
  declarations:[
    PropertyDetailsComponent,
    FavoriteModalComponent
  ],
  imports: [
    CommonModule,
    PropertyDetailsRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [],
  providers:[FavoriteModalService]
})
export class PropertyDetailsModule { }
