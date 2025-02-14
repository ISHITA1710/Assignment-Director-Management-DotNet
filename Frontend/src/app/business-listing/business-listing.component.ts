import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink,RouterOutlet } from '@angular/router';
import { AddBusinessComponent } from '../add-business/add-business.component';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';



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
  imports: [CommonModule,FormsModule], // Add CommonModule here
  templateUrl: './business-listing.component.html',
  styleUrls: ['./business-listing.component.css']
})
export class BusinessListingComponent {
  businesses: Business[] = [
    {
      name: 'ABC Bistro',
      category: '4',
      streetAddress: '123 Main St, Suite 1',
      city: 'Los Angeles',
      state: 'California',
      zipCode: '900101',
      phoneNumber: '6000000001',
      website: 'http://abcb.com',
      rating: 4.50
    },
    {
      name: 'Tech World',
      category: '2',
      streetAddress: '456 Elm St',
      city: 'San Francisco',
      state: 'California',
      zipCode: '941101',
      phoneNumber: '7000000002',
      website: 'http://techworld.com',
      rating: 4.20
    },
    {
      name: 'Health Plus',
      category: '3',
      streetAddress: '789 Oak St',
      city: 'Seattle',
      state: 'Washington',
      zipCode: '981101',
      phoneNumber: '8000000003',
      website: 'http://healthplus.com',
      rating: 4.80
    },
    {
      name: 'Elite Tutors',
      category: '3',
      streetAddress: '321 Maple Ave',
      city: 'Austin',
      state: 'Texas',
      zipCode: '733101',
      phoneNumber: '9000000004',
      website: 'http://elitetutors.com',
      rating: 4.30
    },
    {
      name: '5 Hub',
      category: '5',
      streetAddress: '654 Pine St',
      city: 'Denver',
      state: 'Colorado',
      zipCode: '801201',
      phoneNumber: '6000000005',
      website: 'http://5hb.com',
      rating: 4.60
    },
    
    // Add more businesses as needed
  ];

   filteredBusinesses: Business[] = [];
   searchTerm: string = '';

  constructor(private router: Router) {
//     this.businesses.sort((a, b) => a.name.localeCompare(b.name));
    this.filteredBusinesses = this.businesses;
  }

  filterBusinesses(): void {
      if (!this.searchTerm) {
        this.filteredBusinesses = this.businesses; // Show all if search term is empty
      } else {
        this.filteredBusinesses = this.businesses.filter(business =>
          business.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          business.category.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    }

  onAddBusinessClick() {
  
      this.router.navigateByUrl("/add-business")
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