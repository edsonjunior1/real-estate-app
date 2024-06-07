import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { Router } from '@angular/router';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  public property!: Property;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.property = history.state.property;
  }

  public goToPropertyList() {
    this._router.navigate(['/listings']);
  }


}
