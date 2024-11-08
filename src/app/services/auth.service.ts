import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://6714d0f8690bf212c7629a94.mockapi.io/user';
  private loginModalOpen = new BehaviorSubject<boolean>(false);
  loginModalOpen$ = this.loginModalOpen.asObservable();
    private usernameSubject = new BehaviorSubject<string | null>(null);
  currentUsername$ = this.usernameSubject.asObservable();


  private isLoggedInStatus: boolean = false;
  constructor(private http: HttpClient,private router: Router) {}
  authenticate(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users=> users.find(user => user.username === username && user.password === password))
    );
  }
  private isAuthenticated: boolean = false; // Replace with actual logic



  isLoggedIn(): boolean {
    
    return !!localStorage.getItem('user');
  }

  triggerLoginModal() {
    this.loginModalOpen.next(true);
  }
  setLoggedInStatus(status: boolean): void {
    this.isLoggedInStatus = status;
  }
  logOut() {
    localStorage.removeItem('user'); // Clear username
    localStorage.clear(); // Optionally clear other items like cart

    this.usernameSubject.next(null);  // Emit null to indicate user is logged out
    this.router.navigate(['/home']);  // Navigate to home or login page
  }
  getUsername(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).username : null;
  }
}





