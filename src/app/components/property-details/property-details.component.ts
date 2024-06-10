import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, tap, timer } from 'rxjs';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit, OnDestroy {
  public property!: Property;
  public contactForm!: FormGroup;
  public isFormSubmited: boolean = false;
  public formError: string = 'Please correct the errors in the form.';
  public formSuccess: string = 'Contact Informations Saved!';

  private _subscription = new Subscription();

  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this._buildForm();
  }

  ngOnInit(): void {
    this.property = history.state.property;
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
