import { Component, inject } from '@angular/core';
import { TraineeManagementService } from '../../../shared/Services/trainee-management.service';
import { Route, Router } from '@angular/router';
import { Trainee } from '../../../shared/models/trainee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-trainee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trainee.component.html',
  styleUrl: './add-trainee.component.scss',
})
export class AddTraineeComponent {
  router : Router = inject(Router)
  newTrainee: any = {
    fullName: '',
    age: null,
    phoneNumber: '',
    height: null,
    weight: null,
    details: '',
    email: '',
    physicalLimitation: '',
    status: true
  };

  constructor(private traineeService: TraineeManagementService) {}

  addTrainee() {
    this.traineeService.addTrainee(this.newTrainee);
    this.router.navigate(['traineeManagement']);
    this.resetForm();
  }

  resetForm() {
    this.newTrainee = {
      fullName: '',
      age: null,
      phoneNumber: '',
      height: null,
      weight: null,
      details: '',
      email: '',
      physicalLimitation: '',
      status: true
    };
  }
}