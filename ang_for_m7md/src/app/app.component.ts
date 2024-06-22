import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TraineeManagementComponent } from './trainee-management/trainee-management.component';
import { NotFoundComponent } from './not-found/not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TraineeManagementComponent,LoginPageComponent,NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
