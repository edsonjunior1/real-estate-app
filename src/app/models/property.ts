export interface Property {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  'Sale Price': number; // Api returning
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

