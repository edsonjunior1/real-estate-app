import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from "../models/property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private _apiUrl = '/api/listings.json';

  constructor(private _http: HttpClient) { }

  public getProperties(): Observable<Property[]> {
    return this._http.get<Property[]>(this._apiUrl);
  }
}
