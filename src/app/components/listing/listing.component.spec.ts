import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ListingComponent } from './listing.component';
import { PropertyService } from '../../service/property.service';
import { Property } from '../../models/property';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;
  let mockPropertyService: jasmine.SpyObj<PropertyService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockPropertyService = jasmine.createSpyObj('PropertyService', ['getProperties']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ListingComponent],
      providers: [
        { provide: PropertyService, useValue: mockPropertyService },
        { provide: Router, useValue: mockRouter },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call _getAllProperties on ngOnInit', () => {
    spyOn(component as any, '_getAllProperties');
    component.ngOnInit();
    expect((component as any)._getAllProperties).toHaveBeenCalled();
  });

  it('should navigate to property details on goToDetails', () => {
    const property: Property = { /* mock property data */ } as Property;
    component.goToDetails(property);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/property-details'], { state: { property } });
  });

  it('should update filter criteria and call _getAllProperties on onFilterChange', () => {
    spyOn(component as any, '_getAllProperties');
    const criteria = { bedrooms: 3 };
    component.onFilterChange(criteria);
    expect(component.filterCriteria).toEqual(criteria);
    expect((component as any)._getAllProperties).toHaveBeenCalled();
  });

  it('should set propertyListings based on filter criteria on _getAllProperties', () => {
    const mockProperties: Property[] = [
      { Bedrooms: 3, Bathrooms: 2, Parking: 1, 'Sale Price': 500000 },
      { Bedrooms: 2, Bathrooms: 1, Parking: 1, 'Sale Price': 300000 }
    ] as Property[];

    mockPropertyService.getProperties.and.returnValue(of(mockProperties));
    component.filterCriteria = { bedrooms: 2, priceRange: 400000 };
    (component as any)._getAllProperties();
    expect(component.propertyListings.length).toBe(1);
    expect(component.propertyListings[0].Bedrooms).toBe(2);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    spyOn(component['_subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['_subscription'].unsubscribe).toHaveBeenCalled();
  });

  it('should apply filter correctly in applyFilter', () => {
    const property: Property = { Bedrooms: 3, Bathrooms: 2, Parking: 1, 'Sale Price': 400000 } as Property;
    component.filterCriteria = { bedrooms: 3, priceRange: 500000 };
    const result = (component as any).applyFilter(property);
    expect(result).toBeTrue();
  });
});
