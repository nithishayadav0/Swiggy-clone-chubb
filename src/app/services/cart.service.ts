// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// interface CartItem {
//   name: string;
//   count: number;
// }

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   private cartItems = new BehaviorSubject<CartItem[]>([]);
//   cartItems$ = this.cartItems.asObservable();

//   updateItemCount(itemName: string, count: number) {
//     const items = this.cartItems.value;
//     const index = items.findIndex((item) => item.name === itemName);

//     if (index !== -1) {
//       items[index].count = count;
//     } else {
//       items.push({ name: itemName, count });
//     }

//   }
//   resetCartAndMenuCounts() {
//     this.cartItems.next([]); 
//   }
// }

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItemsSubject = new BehaviorSubject<{ name: string; count: number, imageName: string,price:string}[]>([]);
//   cartItems$ = this.cartItemsSubject.asObservable();
//   constructor() {
//     // Initialize cart items from local storage if available
//     const savedCartItems = localStorage.getItem('cartItems');
//     if (savedCartItems) {
//       this.cartItemsSubject.next(JSON.parse(savedCartItems));
//     }
//   }
//   updateCartItems(items: any[]) {
//     this.cartItemsSubject.next(items);
//     localStorage.setItem('cartItems', JSON.stringify(items)); // Save to local storage
//   }

//   private cartItems: { name: string; count: number, imageName: string,price:string }[] = [];

//   // Update cart items based on item name and imageName
//   updateItemCount(name: string, count: number, imageName: string,price:string) {
//     const existingItem = this.cartItems.find(item => item.name === name && item.imageName === imageName);

//     if (existingItem) {
//       existingItem.count = count;
//     } else {
//       this.cartItems.push({ name, count, imageName,price });
//     }
//     this.cartItemsSubject.next(this.cartItems);
//   }
  
//   // Reset cart items based on the current imageName
//   getCartItemsForImage(imageName: string) {
//     return this.cartItems.filter(item => item.imageName === imageName);
//   }
//   removeItemFromCart(item: any) {
//     let cartItems = this.getCartItemsForImage(item.imageName);
//     cartItems = cartItems.filter(cartItem => cartItem.imageName !== item.imageName);
//     this.updateCartItems(cartItems);
//   }

//   resetCartForImage(imageName: string) {
//     this.cartItems = this.cartItems.filter(item => item.imageName === imageName);
//     this.cartItemsSubject.next(this.cartItems);
//   }
  

// }
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItemsSubject = new BehaviorSubject<{ name: string; count: number, imageName: string, price: string }[]>([]);
//   cartItems$ = this.cartItemsSubject.asObservable();

//   private cartItems: { name: string; count: number, imageName: string, price: string }[] = [];

//   constructor() {
//     // Initialize cart items from localStorage if available
//     const savedCartItems = localStorage.getItem('cartItems');
//     if (savedCartItems) {
//       this.cartItems = JSON.parse(savedCartItems);
//       this.cartItemsSubject.next(this.cartItems);  // Emit the cart items to subscribers
//     }
//   }

//   // Update cart items and store only those with the matching ImageName
//   updateCartItems(items: any[], imageName: string) {
//     // Filter cart items based on imageName
//     const filteredItems = items.filter(item => item.imageName === imageName);

//     // Update cart in both the BehaviorSubject and localStorage
//     this.cartItemsSubject.next(filteredItems);
//     localStorage.setItem('cartItems', JSON.stringify(filteredItems)); // Save filtered items to localStorage
//   }

//   updateItemCount(name: string, count: number, imageName: string, price: string) {
//     const existingItem = this.cartItems.find(item => item.name === name && item.imageName === imageName);

//     if (existingItem) {
//       existingItem.count = count; 
//     } else {
//       this.cartItems.push({ name, count, imageName, price }); // Add new item
//     }

//     this.updateCartItems(this.cartItems, imageName); // Persist the updated cart with the specified ImageName
//   }

//   // Remove an item based on imageName
//   removeItemFromCart(item: any) {
//     const cartItems = this.cartItems.filter(cartItem => cartItem.imageName !== item.imageName);
//     this.updateCartItems(cartItems, item.imageName); // Persist the updated cart items
//   }

//   // Get cart items for a specific imageName
//   getCartItemsForImage(imageName: string) {
//     return this.cartItems.filter(item => item.imageName === imageName);
//   }

//   // Reset cart for a specific imageName
//   resetCartForImage(imageName: string) {
//     // Filter cart items that match the imageName
//     this.cartItems = this.cartItems.filter(item => item.imageName !== imageName);
//     this.updateCartItems(this.cartItems, imageName); // Persist the updated cart items
//   }

//   getLoggedInUsername(): string {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     return user.username || '';  // Return the username from the logged-in user
//   }
//   getCartForUser(username: string): any[] {
//     const cart = localStorage.getItem(`cart_${username}`);
//     return cart ? JSON.parse(cart) : [];  // Return the user's cart if it exists, or an empty array
//   }
//   addToCart(item: any) {
//     const username = this.getLoggedInUsername();  // Get the current logged-in username
//     let cart = this.getCartForUser(username);  // Get the existing cart for this user (if any)

//     // Add the new item to the cart
//     cart.push(item);

//     // Save the updated cart in localStorage for this user
//     localStorage.setItem(`cart_${username}`, JSON.stringify(cart));
//   }
//   getCartItems(): any[] {
//     const username = this.getLoggedInUsername();  // Get the current logged-in username
//     return this.getCartForUser(username);  // Fetch and return cart items for this user
//   }
// }
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<{ name: string; count: number, imageName: string, price: string }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartItems: { name: string; count: number, imageName: string, price: string }[] = [];

  constructor() {
    // Initialize cart items from localStorage if available
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
      this.cartItemsSubject.next(this.cartItems);  // Emit the cart items to subscribers
    }
  }

  // Update cart items and store only those with the matching ImageName
  updateCartItems(items: any[], imageName: string) {
    // Filter cart items based on imageName
    const filteredItems = items.filter(item => item.imageName === imageName && item.count > 0); // Ensure only items with count > 0

    // Update cart in both the BehaviorSubject and localStorage
    this.cartItemsSubject.next(filteredItems);
    localStorage.setItem('cartItems', JSON.stringify(filteredItems)); // Save filtered items to localStorage
  }

  updateItemCount(name: string, count: number, imageName: string, price: string) {
    const existingItem = this.cartItems.find(item => item.name === name && item.imageName === imageName);

    if (existingItem) {
      if (count <= 0) {
        // Remove item from cart if count is zero or less
        this.cartItems = this.cartItems.filter(item => item.name !== name || item.imageName !== imageName);
      } else {
        existingItem.count = count; // Update the count of the existing item
      }
    } else if (count > 0) {
      // Add new item to the cart if count is greater than zero
      this.cartItems.push({ name, count, imageName, price });
    }

    this.updateCartItems(this.cartItems, imageName); // Persist the updated cart with the specified ImageName
  }

  // Remove an item based on imageName
  removeItemFromCart(item: any) {
    const cartItems = this.cartItems.filter(cartItem => cartItem.imageName !== item.imageName);
    this.updateCartItems(cartItems, item.imageName); // Persist the updated cart items
  }

  // Get cart items for a specific imageName
  getCartItemsForImage(imageName: string) {
    return this.cartItems.filter(item => item.imageName === imageName);
  }

  // Reset cart for a specific imageName
  resetCartForImage(imageName: string) {
    // Filter cart items that match the imageName
    this.cartItems = this.cartItems.filter(item => item.imageName !== imageName);
    this.updateCartItems(this.cartItems, imageName); // Persist the updated cart items
  }

  getLoggedInUsername(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.username || '';  // Return the username from the logged-in user
  }

  getCartForUser(username: string): any[] {
    const cart = localStorage.getItem(`cart_${username}`);
    return cart ? JSON.parse(cart) : [];  // Return the user's cart if it exists, or an empty array
  }

  addToCart(item: any) {
    const username = this.getLoggedInUsername();  // Get the current logged-in username
    let cart = this.getCartForUser(username);  // Get the existing cart for this user (if any)

    // Add the new item to the cart
    cart.push(item);

    // Save the updated cart in localStorage for this user
    localStorage.setItem(`cart_${username}`, JSON.stringify(cart));
  }

  getCartItems(): any[] {
    const username = this.getLoggedInUsername();  // Get the current logged-in username
    return this.getCartForUser(username);  // Fetch and return cart items for this user
  }
}
