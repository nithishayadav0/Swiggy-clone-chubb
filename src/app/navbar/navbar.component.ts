import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FormsModule, LoginComponent,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: []
})
export class NavbarComponent implements OnInit {
  @Input() loggedInUsername: string | null = null;
  isLoginOpen: boolean = false; 
  isOpen = false;
  username: string | null = null;
  password = ''; 
  errorMessage = ''; 

  constructor(private authService: AuthService, private router:Router,private userService : UserService) {

  }
  ngOnInit() {

    this.userService.currentUsername$.subscribe(username => {
      this.username = username;
    });
    const userString = localStorage.getItem('user');
    if(userString){
    const storedUsername= JSON.parse(userString);
    
    this.username = storedUsername.username;
    }
  }
  close() {
    this.isOpen = false;
    this.errorMessage = '';
  }
  
  openLightbox() {
    this.isLoginOpen = true;
  }
  goToCart() {
    if (!this.authService.isLoggedIn()) {
   
      this.authService.setLoggedInStatus(true);
      this.openLightbox();
    } else {
      this.router.navigate(['/cart']);
    }
  }
 
  goToAccount() {
    this.router.navigate(['/my-account']); // Navigate to the my-account route
  }
  logOut() {
    this.authService.logOut();  // Call the logout function from AuthService
  }
  }
   
