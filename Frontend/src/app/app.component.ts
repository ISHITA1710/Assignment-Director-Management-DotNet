// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule,RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
  
//   title(title: any) {
//     throw new Error('Method not implemented.');
//   }

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(private router: Router){

    }

   gotToDashboard(){
      this.router.navigate(['/business']);
    }

}
