import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  @Input() isOpen: boolean = false;
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isROpen = false;
  constructor(private authService: AuthService,private router: Router ,private userService: UserService) {}
  open() {
    this.isOpen = true;
   
  }
   
  openLightbox() {
    this.isROpen = true;

  }

  close() {
    this.isOpen = false;
  }
  
  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      user => {
        if (user) {
          this.errorMessage = '';
          localStorage.setItem('user', JSON.stringify(user));
          this.userService.setUsername(this.username);
          this.authService.setLoggedInStatus(true)
          this.close(); 

          console.log('Login successful', user); 

          this.router.navigate(['/home']);

        } else {
        
          this.errorMessage = 'Invalid username or password';
        }
      },
      error => {
        this.errorMessage = 'Error during authentication';
      }
    );
  }
  




}




  