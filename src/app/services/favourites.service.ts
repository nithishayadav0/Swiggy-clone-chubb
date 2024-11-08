import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private favouritesState: boolean[] = [];
  private favouritesKey = 'favouritesState';

  private favouritesSource = new BehaviorSubject<any[]>([]);
  favourites$ = this.favouritesSource.asObservable();

  constructor() {
    const savedState = localStorage.getItem(this.favouritesKey);
    if (savedState) {
      this.favouritesState = JSON.parse(savedState);
    } else {
      this.favouritesState = []; // Initialize with an empty array
    }
  }

  getToggleState(): boolean[] {
    return this.favouritesState;
  }

  setToggleState(index: number, state: boolean): void {
    this.favouritesState[index] = state;
    localStorage.setItem(this.favouritesKey, JSON.stringify(this.favouritesState));
  }

  addToFavourites(item: any) {
    const currentFavourites = this.favouritesSource.value;
    this.favouritesSource.next([...currentFavourites, item]);
    localStorage.setItem('favouritesList', JSON.stringify([...currentFavourites, item]));
  }
  removeFromFavourites(item: any) {
    const currentFavourites = this.favouritesSource.value.filter(fav => fav.name !== item.name);
    this.favouritesSource.next(currentFavourites);
    // Optionally, update local storage if needed
    localStorage.setItem('favouritesState', JSON.stringify(currentFavourites));
  }
}
