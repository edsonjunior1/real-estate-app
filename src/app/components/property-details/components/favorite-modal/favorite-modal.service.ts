import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';


import { Property } from '../../../../models/property';
import { FavoriteModalComponent } from './favorite-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FavoriteModalService {
  public propertyDetailsComponent!: ComponentRef<FavoriteModalComponent>;
  private _historyState$!: BehaviorSubject<any>;

  constructor() { }

  setHistoryState(historyState: BehaviorSubject<any>) {
    this._historyState$ = historyState;
  }

  getHistoryState(): BehaviorSubject<any> {
    return this._historyState$;
  }

  openModal(elementRef: ViewContainerRef, properties: any[]):void {
    elementRef.clear();

    this.propertyDetailsComponent = elementRef.createComponent(FavoriteModalComponent);
    this.propertyDetailsComponent.instance.properties = properties;

    this.propertyDetailsComponent.instance.close = () => this.closeModal(elementRef);
  }

  closeModal(viewContainerRef:ViewContainerRef): void {
    if (this.propertyDetailsComponent) {
      this.propertyDetailsComponent.destroy();
      viewContainerRef.clear();
    }
  }


}

