import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Trainee } from '../../../shared/models/trainee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TraineeManagementService } from '../../../shared/Services/trainee-management.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(public traineeService: TraineeManagementService) {}
  @Input() selectedTrainee!: Trainee;
  @Output() closeDetails = new EventEmitter<void>();
  isEditing = false;
  editedTrainee: Trainee;

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.editedTrainee = { ...this.selectedTrainee };
    }
  }

  saveDetails() {
    this.traineeService.updateTrainee(this.editedTrainee);
    this.selectedTrainee = this.editedTrainee;
    this.isEditing = false;
  }

  close() {
    this.closeDetails.emit();
  }
}
