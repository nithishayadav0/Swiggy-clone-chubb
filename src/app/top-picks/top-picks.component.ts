import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnlineService } from '../services/online.service';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-top-picks',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './top-picks.component.html',
  styleUrl: './top-picks.component.scss'
})
export class TopPicksComponent {
  images=[
    { src: 'https://b.zmtcdn.com/data/pictures/4/20125394/47686f1feac71ee1e28cdea5aeebcb7f.jpg?fit=around|960:500&crop=960:500;*,*', name: 'Chinese Wok',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjuwW_pmMOIYRrTvbsX_wop-ip0SQwMIxog&s",name: 'Take It Cheesy',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tNy_2BUZR3LUcHDOFPnXueoNY8viHcJDIw&s",name: 'Wingman’s Pub',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/95982cfa57cb3b7e504f2015c375fd55",name: 'Wine O’Clock Tapas Bar',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvl2qVDosj-z-tFvd8L5ab7HpNHtB3EM6Nfg&s", name: 'Lettuce Eat Bistro',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_37103.JPG",name: 'Haute Dog Diner',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://i.pinimg.com/736x/30/13/32/301332e0a5bea49b228b201aaa158612.jpg", name: 'Not Your Grandpa’s Grill',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan, Desserts',
      location: 'Kukatpally' },
    { src:"https://naturalicecreams.in/wp-content/uploads/2023/11/Blog-07-1.jpg", name: 'Basic B Burgers',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan',
      location: 'Kukatpally' },
    { src:"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/a94b0766985e3157eda8205390bb6700", name: 'Red Stiletto Restaurant',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan',
      location: 'Kukatpally' },
    { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqV0CcsP54JGFDP8oM43eerIOnInGYuZXNrg&s", name: 'The Nouveau Table',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan',
      location: 'Kukatpally'},
    { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetzfcWKxMuZatqYKZCYkKyBxEk2dwW6WcWg&s", name: 'The Winstonian',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan',
      location: 'Kukatpally' },
    { src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/5dad1fcf-aa7f-4086-9e18-4eb4c8ab8430_591755.JPG", name: 'Fauna Kitchen',
      rating: '3.9',
      time: '45-50 mins',
      cuisines: 'Chinese, Asian, Tibetan',
      location: 'Kukatpally'}
    
  ];
  currentIndex:number=0
  imagesPerPage:number=3
  moveLeft(){
  if (this.currentIndex > 0) {
    this.currentIndex -= this.imagesPerPage; // Move left by the number of images per page
  }else{
    this.currentIndex=0
  }
}

moveRight() {
  if (this.currentIndex + this.imagesPerPage < this.images.length) {
    this.currentIndex += this.imagesPerPage; // Move right by the number of images per page
  }
  }

  
  navigateToMenuItems(ImageName:string) {
    this.router.navigate(['/menu-items'], { queryParams: { name: ImageName } });

  }
 sendImageToCart(imageName: string) {
    const image = this.images.find(img => img.name === imageName);
    if (image) {
      this.onlineService.updateImageSrc(image.src,image.name);
    }
  }
  buttonImageSrcs: string[] = this.images.map(() => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPKrpOLz8v7lQ2awP3OqYRlv_gt9KKtqgWA&s');
  
  constructor(private router: Router, 
    private onlineService: OnlineService, 
    private favouritesService: FavouritesService) {
  // Load the initial toggle state from the service
  const savedState = this.favouritesService.getToggleState();
  this.buttonImageSrcs = savedState.map(state => state 
  ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPKrpOLz8v7lQ2awP3OqYRlv_gt9KKtqgWA&s' 
  : 'https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=612x612&w=0&k=20&c=i2vL1DR3XaqPcLAUBiaQzeQOj8uqksXED6wI66MO3h0=');
  }
  
  toggleButtonImage(index: number) {
  
  const currentState = this.buttonImageSrcs[index] === 'https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=612x612&w=0&k=20&c=i2vL1DR3XaqPcLAUBiaQzeQOj8uqksXED6wI66MO3h0=';
  
  if (currentState) {
  
  this.buttonImageSrcs[index] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPKrpOLz8v7lQ2awP3OqYRlv_gt9KKtqgWA&s';
  
  this.favouritesService.setToggleState(index, true);
  } else {
  // Change back to empty heart
  this.buttonImageSrcs[index] = 'https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=612x612&w=0&k=20&c=i2vL1DR3XaqPcLAUBiaQzeQOj8uqksXED6wI66MO3h0=';

  this.favouritesService.setToggleState(index, false);
 
  this.favouritesService.addToFavourites(this.images[index]);
  }
  }
  

  }
  
  




