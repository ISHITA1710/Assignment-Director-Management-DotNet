import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-business',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent {
  businessForm: FormGroup;
  categories: string[] = ['Retail', 'Food & Beverage', 'Services', 'Technology', 'Health'];

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: [''],
      state: [''],
      zipCode: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      website: ['', [Validators.pattern(/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/.*)?$/)]],
      rating: [null, [Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit(): void {
    if (this.businessForm.valid) {
      console.log('Form Submitted!', this.businessForm.value);
      this.businessForm.reset();
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
