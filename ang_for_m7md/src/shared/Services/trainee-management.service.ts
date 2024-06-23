import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TraineeManagementService {
  
  constructor(private router : Router) { }

  openAddTrainee() {
   this.router.navigate(['/add-trainee']);
  }
}
