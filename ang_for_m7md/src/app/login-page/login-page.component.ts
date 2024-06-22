import { Component } from '@angular/core';
import { LoginService } from '../../shared/Services/login.service'; // Adjust the path
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-your-component',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginPageComponent {
  pwd : string;
  username : string;
  constructor(private loginService: LoginService) {}

  loginClicked() {
    
    if (this.loginService.login(this.username, this.pwd)) {
      console.log('Login successful for:', this.username);
    } else {
      console.log('Invalid login attempt');
    }
    
  }
}
