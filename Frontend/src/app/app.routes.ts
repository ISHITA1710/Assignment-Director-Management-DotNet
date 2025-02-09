// app.routes.ts
import { Routes } from '@angular/router';
import { BusinessListingComponent } from './business-listing/business-listing.component';
import { AddBusinessComponent } from './add-business/add-business.component'; // Import the new component
import { AppComponent } from './app.component'; // Import the AppComponent for adding a business

export const routes: Routes = [
  { path: '', component: BusinessListingComponent }, // Default route to show business listings
//   { path: 'add-business', component: AppComponent } // Route to add a new business
  { path: 'add-business', component: AddBusinessComponent }
];
