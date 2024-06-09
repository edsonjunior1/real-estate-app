import { Component, OnDestroy, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyService } from '../../service/property.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {
  public propertyListings: Property[] = [];
  public filterCriteria: any = {};

  private _subscription = new Subscription();

  constructor(
    private _propertyService: PropertyService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._getAllProperties();
  }

  public goToDetails(property: Property) {
    this._router.navigate(['/property-details'], { state: { property } })
  }

  public onFilterChange(criteria: any): void {
    this.filterCriteria = criteria;
    this._getAllProperties();
  }

  private _getAllProperties() {
    this._subscription.add(
      this._propertyService.getProperties().subscribe((data) => {
        this.propertyListings = data.filter(properties => this.applyFilter(properties));
      })
    )
  }

  private applyFilter(listing: Property): boolean {
    const { bedrooms, bathrooms, parkingSpaces, priceRange } = this.filterCriteria;
    return (!bedrooms || listing.Bedrooms >= bedrooms) &&
      (!bathrooms || listing.Bathrooms >= bathrooms) &&
      (!parkingSpaces || listing.Parking >= parkingSpaces) &&
      (!priceRange || listing['Sale Price'] <= priceRange);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
