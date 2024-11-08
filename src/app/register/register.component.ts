import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  @Input() isROpen: boolean = false;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  private apiUrl = 'https://6714d0f8690bf212c7629a94.mockapi.io/user';

  constructor(private router: Router, private http: HttpClient,private authService: AuthService) {}

  close() {
    this.isROpen = false;
  }

  // Method to handle form submission
 
  onSubmit() {
    if (this.username && this.password) {
      // Check if the username exists by sending a GET request
      this.http.get<any[]>(`${this.apiUrl}?username=${this.username}`).subscribe(
        (users) => {
          if (users && users.length > 0) {
            // Username exists
            this.errorMessage = 'Username already exists. Please choose another.';
          } else {
            // Username does not exist, proceed with registration
            const userData = {
              username: this.username,
              password: this.password
            };
  
            this.http.post(this.apiUrl, userData).subscribe(
              (response) => {
                console.log('User registered successfully', response);
                this.isROpen=false
                this.router.navigate(['\home']); // Redirect on success
              },
              (error) => {
                console.error('Registration failed', error);
                this.errorMessage = 'Registration failed. Please try again.';
              }
            );
          }
        },
        (error) => {
          // Handle case where API returns an error when no matching username is found
          if (error.status === 404 || error.error === 'Not Found') {
            // Treat as "no user found" and proceed with registration
            const userData = {
              username: this.username,
              password: this.password
            };
  
            this.http.post(this.apiUrl, userData).subscribe(
              (response) => {
                console.log('User registered successfully', response);
                this.isROpen=false
                this.router.navigate(['/home']);
              },
              (error) => {
                console.error('Registration failed', error);
                this.errorMessage = 'Registration failed. Please try again.';
              }
            );
          } else {
            // Handle other errors (e.g., network issues, server errors)
            console.error('Error checking username:', error);
            this.errorMessage = 'Error checking username. Please try again later.';
          }
        }
      );
    } else {
      this.errorMessage = 'Please enter both username and password.';
    }
  }
  
}
  

