import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListingModule } from './components/listing/listing.module';
import { PropertyDetailsModule } from './components/property-details/property-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListingModule,
    PropertyDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
