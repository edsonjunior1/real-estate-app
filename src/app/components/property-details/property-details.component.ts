import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, filter, tap, timer } from 'rxjs';

import { Property } from '../../models/property';
import { FavoriteModalService } from './components/favorite-modal/favorite-modal.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('modalContainer', { read: ViewContainerRef, static: true }) modalContainer!: ViewContainerRef;

  public property!: Property;
  public contactForm!: FormGroup;
  public isFormSubmited: boolean = false;
  public formError: string = 'Please correct the errors in the form.';
  public formSuccess: string = 'Contact Informations Saved!';
  public favorites: Property[] = [];

  private _subscription = new Subscription();
  private _historyState$: BehaviorSubject<any> = new BehaviorSubject(history.state);

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _favoriteModalService: FavoriteModalService
  ) {
    this._buildForm();
  }

  ngOnInit(): void {
    this._favoriteModalService.setHistoryState(this._historyState$);

    this._subscription.add(
      this._historyState$.pipe(filter(state => !!state)).subscribe(newState => {
        this.updatePropers(newState);
      })
    );

    this.loadFavorites();
  }

  public goToPropertyList(): void {
    this._router.navigate(['/listings']);
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.isFormSubmited = true;

      const resetFormAfterDelay$ = timer(1500).pipe(
        tap(() => {
          this.isFormSubmited = false;
          this.contactForm.reset();
        })
      );

      this._subscription.add(
        resetFormAfterDelay$.subscribe()
      );
    }
  }

  public saveFavorites(fav: Property): void {
    if (!this._isIdExists(fav.Id)) {
      this.favorites.push(fav);
      this.updateFavoritesState();
    }
  }

  public updateFavoritesState(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  public loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  public openFavoriteModal(): void {
    this._favoriteModalService.openModal(this.modalContainer, this.favorites);
  }

  private updatePropers(newState:any): void {
    if (newState && newState.property) {
      this.property = newState.property;
    }
  }

  private _isIdExists(id: number):boolean {
    return this.favorites.some(fav => fav.Id === id);
  }


  private _buildForm(): void {
    this.contactForm = this._fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      comments: ['', Validators.required]
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
