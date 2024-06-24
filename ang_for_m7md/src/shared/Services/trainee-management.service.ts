import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from '../models/trainee';

@Injectable({
  providedIn: 'root',
})
export class TraineeManagementService {
  constructor(private router: Router) {}
  trainees = [
    new Trainee(
      1,
      'ali mantach ',
      21,
      '71102329',
      180,
      65,
      'none',
      'I love to do double biceps',
      'mantach@gmail.com',
      'male',
      true
    ),
    new Trainee(
      2,
      'ali jaafar ',
      22,
      '71132329',
      190,
      100,
      'none',
      "I'd like to become 70 kg",
      'jaafar@gmail.com',
      'male',
      false
    ),
    new Trainee(
      3,
      'hassan makke ',
      17,
      '71104329',
      170,
      74,
      'none',
      'hey how are you',
      'makke@gmail.com',
      'male',
      true
    ),
    new Trainee(
      4,
      'haidar hussein ',
      28,
      '71102359',
      184,
      66,
      'none',
      'i want to become stronger to continue my career in football',
      'hussen@gmail.com',
      'male',
      false
    ),
    new Trainee(
      5,
      'olivia  ',
      24,
      ' 71102329',
      165,
      51,
      'none',
      'i want to become fit so i can continue to practice dancing',
      'olivia@gmail.com',
      'female',
      true
    ),
  ];
  openAddTrainee() {
    this.router.navigate(['/add-trainee']);
  }
  addTrainee(newTrainee: Trainee) {
    this.trainees.push(newTrainee);
  }

  updateTrainee(updatedTrainee: Trainee) {
    const index = this.trainees.findIndex((t) => t.id === updatedTrainee.id);
    if (index !== -1) {
      this.trainees[index] = updatedTrainee;
    }
  }
}
