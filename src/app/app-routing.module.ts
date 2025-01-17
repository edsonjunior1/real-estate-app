import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', loadChildren: () => import('./components/listing/listing.module').then(m => m.ListingModule) },
  { path: 'property-details', loadChildren: () => import('./components/property-details/property-details.module').then(m => m.PropertyDetailsModule) },
  { path: '**', redirectTo: '/listings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
