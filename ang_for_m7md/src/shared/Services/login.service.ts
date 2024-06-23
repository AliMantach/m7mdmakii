import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public trainers = [
    { name: 'trainer1', password: '123' },
    { name: 'trainer2', password: '1234' },
    { name: 'trainer3', password: '12345' },
  ];

  constructor(private router: Router) {}

  login(userName: string, passWord: string): boolean {
    let foundTrainer = this.trainers.find((trainer) => 
      trainer.name === userName && trainer.password === passWord
);

    if (foundTrainer) {
      
      return true;
    } else {
      return false;
    }
  }
}
