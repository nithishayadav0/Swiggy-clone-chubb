// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service';
// import { MenuService } from '../services/menu.service';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.scss'
// })
// export class CartComponent implements OnInit {

//   cartItems: { name: string; count: number; imageName: string }[] = [];
//   ImageName: string = '';  
//   price: number = 0; 

//   constructor(private cartService: CartService, private menuService: MenuService, private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.cartService.cartItems$.subscribe((items) => {
//       this.cartItems = items;
      
//       this.route.queryParams.subscribe(params => {
//         this.ImageName = params['ImageName'];  // Get the ImageName from the query params
//         this.price = params['price']; 
//     });
//   })
// }

// }
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service';
// import { MenuService } from '../services/menu.service';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.scss'
// })
// export class CartComponent implements OnInit {
//   cartItemsForImage: any[] = [];
//   cartItems: { name: string; count: number; imageName: string }[] = [];
//   ImageName: string = '';  
//   price: number = 0; 

//   constructor(private cartService: CartService, private menuService: MenuService, private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.cartService.cartItems$.subscribe((items) => {
//       this.cartItems = items;
      
//       this.route.queryParams.subscribe(params => {
//         this.ImageName = params['ImageName'];  // Get the ImageName from the query params
//         this.price = params['price']; 
//         this.cartItemsForImage = this.cartService.getCartItemsForImage(this.ImageName);
//     });
//   })
// }
// showCartItems(imageName: string) {
//   this.cartItemsForImage = this.cartService.getCartItemsForImage(imageName);
// }
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnlineService } from '../services/online.service';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { AddressService } from '../services/address.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AddressModalComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItemsForImage: any[] = [];
  cartItems: { name: string; count: number; imageName: string, price: string}[] = [];
  ImageName: string = '';  
  price: number = 0; 
  imageSrc: string | null = null;
  address: any = null;
  showAddressForm: boolean = false;
  AnImageName:string | null=null;
  constructor(
    private cartService: CartService, 
    private route: ActivatedRoute,
    private onlineService: OnlineService,
    private addressService: AddressService,
    private menuService:MenuService
  ) {}

  ngOnInit() {
    // Subscribe to cart items so that we always have the latest data
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });

    // Subscribe to route params and filter cart items based on imageName
    this.route.queryParams.subscribe(params => {
      this.ImageName = params['ImageName'];  // Get the ImageName from the query params
      this.price = params['price']; 

      // Subscribe to the image source from the online service
      this.onlineService.currentImage.subscribe(src => {
        this.imageSrc = src['src'];
        this.AnImageName=src['imageName']
      });
    });

    // Subscribe to address updates
    this.addressService.currentAddress.subscribe((address) => {
      if (address) {
        this.address = address; // Update the address when it's available
      }
    });
  }

  // Method to open the address form modal
  openAddressForm() {
    this.showAddressForm = true;
  }

  // Method to close the address form modal
  closeAddressForm() {
    this.showAddressForm = false;
  }
  trackById(index: number, item: any): any {
    return item.id;  // Assuming `id` is the unique identifier for each cart item
  }
  get allItemsHaveCountGreaterThanZero(): boolean {
    return this.cartItems.some(item => item.count > 0);
  }
 


  

  increaseCartItemCount(cartItem: any) {
    cartItem.count++;  // Increase the count of the item in the cart
    this.cartService.updateItemCount(cartItem.name, cartItem.count, cartItem.imageName, cartItem.price); 
    this.menuService.updateItemCount(cartItem.name, cartItem.count);
    this.cartService.updateCartItems  // Sync the updated count with the cart service
  }

  decreaseCartItemCount(cartItem: any) {
    if (cartItem.count > 0) {
      cartItem.count--;  // Decrease the count of the item in the cart
      this.cartService.updateItemCount(cartItem.name, cartItem.count, cartItem.imageName, cartItem.price);  // Sync the updated count with the cart service
      this.menuService.updateItemCount(cartItem.name, cartItem.count); 
      this.cartService.updateCartItems
    }
  }
  extractPrice(price: string): number {
    // Extract numeric value from the price string and convert it to a number
    return parseFloat(price.replace(/[^\d.-]/g, ''));
  }
  calculateTotal(cartItem: any): number {
    const price = this.extractPrice(cartItem.price);  // Get the price as a number
    return price * cartItem.count;  // Multiply the price by the count
  }  
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, cartItem) => {
      const price = this.extractPrice(cartItem.price);
      return total + (price * cartItem.count);
    }, 0);
  }
  calculateToPay():number{
    return this.cartItems.reduce((total, cartItem) => {
      const price = this.extractPrice(cartItem.price);
      return total + (price * cartItem.count)+10+2+10;
    }, 0);
  }

}
