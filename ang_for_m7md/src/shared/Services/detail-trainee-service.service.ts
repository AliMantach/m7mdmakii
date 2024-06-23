import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TraineeManagementService } from '../Services/trainee-management.service';
import { Trainee } from '../models/trainee';

@Injectable({
  providedIn: 'root',
})
export class DetailTraineeServiceService {
  constructor(
    private activeRoute: ActivatedRoute,
    public traineeManagementService: TraineeManagementService
  ) {}
  selectedTrainee: Trainee;

  findTrainee() :Trainee {
   
    return this.selectedTrainee;
  }
}
 