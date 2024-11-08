import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {

  private imageSource = new BehaviorSubject<{ src: string | null; imageName: string | null }>({ src: null, imageName: null });
  currentImage = this.imageSource.asObservable();

  updateImageSrc(src: string, imageName: string) {
    // Emit an object containing both src and imageName
    this.imageSource.next({ src, imageName });
  }
  }
 
