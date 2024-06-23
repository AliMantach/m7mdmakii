import { Component, inject } from '@angular/core';
import { LoginService } from '../../shared/Services/login.service'; // Adjust the path
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginPageComponent {
  pwd : string;
  username : string;
  router : Router = inject(Router);
  constructor(public loginService: LoginService) {}

  loginClicked() {
    
    if (this.loginService.login(this.username, this.pwd)) {
      this.router.navigateByUrl('/traineeManagement');
    } else {
      console.log('Invalid login attempt');
      console.log(this.username);
    }
    
  }
}
