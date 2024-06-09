import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();

  get numberOptions(): number[] {
    return Array.from({ length: 10 }, (_, i) => i + 1);
  }

  public filterForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.filterForm = this._fb.group({
      bedrooms: [0],
      bathrooms: [0],
      parkingSpaces: [0],
      priceRange: [0]
    });
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(value => {
      this.filterChange.emit(value);
    });
  }

  public price(value: number): string {
    return `${value}`;
  }

  public applyFilter(): void {
    this.filterChange.emit(this.filterForm.value);
  }

}
