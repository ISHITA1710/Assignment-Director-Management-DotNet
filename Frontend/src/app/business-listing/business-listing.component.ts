import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { BusinessService } from '../business-service.service';

interface Business {
  id?: number;
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
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './business-listing.component.html',
  styleUrls: ['./business-listing.component.css']
})
export class BusinessListingComponent implements OnInit {
  searchTerm: string = '';
  businesses: Business[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.loadBusinesses(); // ✅ Fetch businesses on component load
  }

  loadBusinesses() {
    this.businessService.getBusinesses().subscribe(
      (data) => {
        this.businesses = data;
        this.businesses.sort((a, b) => a.name.localeCompare(b.name));
      },
      (error) => {
        console.error('Error fetching businesses', error);
      }
    );
  }

  filteredBusinesses(): Business[] {
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

  editBusiness(business: Business): void {
    console.log('Edit business:', business);
    // Implement edit functionality here
  }

  deleteBusiness(business: Business): void {
    if (confirm(`Are you sure you want to delete ${business.name}?`)) {
      this.businessService.deleteBusiness(business.id!).subscribe(
        () => {
          this.businesses = this.businesses.filter(b => b.id !== business.id);
        },
        (error) => {
          console.error('Error deleting business', error);
        }
      );
    }
  }
}
