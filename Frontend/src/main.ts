// main.ts
import 'zone.js'; // Ensure zone.js is imported
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BusinessListingComponent } from './app/business-listing/business-listing.component';

bootstrapApplication(BusinessListingComponent, appConfig)
  .catch((err) => console.error(err));
