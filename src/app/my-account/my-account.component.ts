import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent {
  constructor(private router: Router,private authService: AuthService) {}
  username: string | null = null;
  ngOnInit() {
     // Check if username is in localStorage and set it
     const userString = localStorage.getItem('user');
     if(userString){
     const storedUsername= JSON.parse(userString);
     
     this.username = storedUsername.username;

     } else {
       // If not, subscribe to the currentUsername$ observable to get the logged-in username
       this.authService.currentUsername$.subscribe((username) => {
         this.username = username;
       });
     }
  }
 
  
  logOut() {
    this.authService.logOut();  // Calls the logout method from AuthService
  }
    // Method to navigate to the Favourites page
    navigateToFavourites() {
      this.router.navigate(['/favourites']); // Replace '/favourites' with the route path to your Favourites page
    }
}
