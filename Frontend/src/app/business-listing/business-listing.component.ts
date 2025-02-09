import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';




interface Business {
  name: string;
  category: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  website: string;
  rating: number;
}

@Component({
  selector: 'app-business-listing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule], // Add CommonModule here
  templateUrl: './business-listing.component.html',
  styleUrls: ['./business-listing.component.css']
})
export class BusinessListingComponent {
  searchTerm: string = '';
  businesses: Business[] = [
    // Add more businesses as needed
  ];

  filteredBusinesses() {
    if (!this.searchTerm) {
      return this.businesses;
    }

    const searchLower = this.searchTerm.toLowerCase();
    return this.businesses.filter(business =>
      business.name.toLowerCase().includes(searchLower) ||
      business.category.toLowerCase().includes(searchLower) ||
      business.streetAddress.toLowerCase().includes(searchLower) ||
      business.state.toLowerCase().includes(searchLower) ||
      business.zipCode.includes(this.searchTerm) ||
      business.phoneNumber.includes(this.searchTerm)
    );
  }

  constructor() {
    this.businesses.sort((a, b) => a.name.localeCompare(b.name));
  }


  editBusiness(business: Business): void {
    console.log('Edit business:', business);
    // Implement edit functionality here
  }

  deleteBusiness(business: Business): void {
    console.log('Delete business:', business);
    this.businesses = this.businesses.filter(b => b !== business);
  }
}
