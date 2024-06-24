import { Component, inject } from '@angular/core';
import { TraineeManagementService } from '../../shared/Services/trainee-management.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DetailsComponent } from '../../app/trainee-management/details/details.component';
import { AddTraineeComponent } from './add-trainee/add-trainee.component';
@Component({
  selector: 'trainee-management',
  standalone: true,
  imports: [CommonModule, RouterLink, DetailsComponent, AddTraineeComponent],
  templateUrl: './trainee-management.component.html',
  styleUrls: ['./trainee-management.component.css'],
})
export class TraineeManagementComponent {
  selectedTrainee: any = null;

  constructor(public traineeManagement: TraineeManagementService) {}

  traineeService = inject(TraineeManagementService);
  allTrainee = this.traineeService.trainees;

  openAddTrainee() {
    this.traineeManagement.openAddTrainee();
  }

  viewDetails(trainee: any) {
    this.selectedTrainee = trainee;
  }

  closeDetails() {
    this.selectedTrainee = null;
  }
}
