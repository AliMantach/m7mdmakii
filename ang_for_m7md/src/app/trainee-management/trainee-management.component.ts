import { Component } from '@angular/core';
import { TraineeManagementService } from '../../shared/Services/trainee-management.service';
@Component({
  selector: 'trainee-management',
  standalone: true,
  imports: [],
  templateUrl: './trainee-management.component.html',
  styleUrl: './trainee-management.component.css'
})
export class TraineeManagementComponent {
constructor(public traineeManagement : TraineeManagementService) { }
openAddTrainee() {
  this.traineeManagement.openAddTrainee();
}
}
