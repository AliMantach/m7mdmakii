import { Component, Input } from '@angular/core';
import { Trainee } from '../../../shared/models/trainee';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() selectedTrainee!: Trainee;

  close() {
    this.selectedTrainee = null;
  }

  
}
