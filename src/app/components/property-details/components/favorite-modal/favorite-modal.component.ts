import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Property } from '../../../../models/property';
import { FavoriteModalService } from './favorite-modal.service';

@Component({
  selector: 'app-favorite-modal',
  templateUrl: './favorite-modal.component.html',
  styleUrls: ['./favorite-modal.component.scss']
})
export class FavoriteModalComponent implements OnInit {
  @Output() newState = new EventEmitter<any>();
  public properties!: Property[];
  public close!: () => void;


  constructor(
    private _router: Router,
    private _favoriteModalService: FavoriteModalService
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    if (this.close) {
      this.close();
    }
  }

  public goToDetails(property: Property) {
    const newState = {...history.state, property };
    this._favoriteModalService.getHistoryState().next(newState);
    this._router.navigate(['/property-details']);
    this.onClose();
  }
}
