import { Component , inject } from '@angular/core';
import { TraineeManagementService } from '../../../shared/Services/trainee-management.service';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-trainee',
  standalone: true,
  imports: [],
  templateUrl: './add-trainee.component.html',
  styleUrl: './add-trainee.component.scss'
})
export class AddTraineeComponent {
constructor(private traineeManagementService: TraineeManagementService) {}
gender : string ;
onChange(gender){
this.gender = gender;
}
router : Router = inject(Router);
@ViewChild('fullName') fullName: string; 
@ViewChild('age') age : number;
@ViewChild('email') email: string; 
@ViewChild('phone') phone: string; 
@ViewChild('weight') weight: number; 
@ViewChild('height') height: number; 
@ViewChild('physicalLimitation') physicalLimitation : string; 
@ViewChild('details') details : string;
@ViewChild('id') id :number;
addTrainee(){
  this.traineeManagementService.addTrainee(this.id,this.fullName,this.age,this.phone,this.height , this.weight , this.physicalLimitation , this.details ,this.email,this.gender);
  this.fullName = "";
  this.email = "";
  this.phone = "";
  this.weight = null;
  this.height = null;
  this.physicalLimitation = "";
  this.gender = "";
  this.age = null;
  this.details = "";
  this.router.navigate(['/traineeManagement']);
}
}
