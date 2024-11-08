import { Component } from '@angular/core';
import {  RouterOutlet,provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';  // Ensure HttpClientModule is imported
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { AddressModalComponent } from './address-modal/address-modal.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FavouritesComponent } from './favourites/favourites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [

    CommonModule,
    RouterOutlet,
    HomeComponent,
    HttpClientModule,  
    FormsModule,
    AddressModalComponent ,
    MyAccountComponent,
    FavouritesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'swiggy-clone';
  
}
