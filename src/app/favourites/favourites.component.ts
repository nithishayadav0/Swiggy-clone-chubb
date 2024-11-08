import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavouritesService } from '../services/favourites.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [ CommonModule,FormsModule ],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {


  favourites: any[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit() {
    this.favouritesService.favourites$.subscribe(favs => {
      this.favourites = favs;

    });
  }
}
