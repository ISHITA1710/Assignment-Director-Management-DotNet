import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// ✅ Define the interface outside the class
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

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private apiUrl = 'https://localhost:5001/api/Business'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiUrl);
  }

  getBusinessById(id: number): Observable<Business> {
    return this.http.get<Business>(`${this.apiUrl}/${id}`);
  }

  addBusiness(business: Business): Observable<Business> {
    return this.http.post<Business>(this.apiUrl, business);
  }

  updateBusiness(id: number, business: Business): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, business);
  }

  deleteBusiness(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
