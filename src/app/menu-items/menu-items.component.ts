// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { CartService } from '../services/cart.service';
// import { MenuService } from '../services/menu.service';
// import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';
// @Component({
//   selector: 'app-menu-items',
//   standalone: true,
//   imports: [CommonModule,NavbarComponent],
//   templateUrl: './menu-items.component.html',
//   styleUrl: './menu-items.component.scss'
// })
// export class MenuItemsComponent {
 

//   isMenuItemsVisible: boolean = false;
//   imageName: string = '';
//   filteredMenuItems: any[] = [];
//   cartItemsForImage: any[] = [];
//   menuItems: any[];
//   constructor(private route: ActivatedRoute ,private cartService: CartService, private menuService: MenuService ,private router: Router ) {
//     this.menuItems = this.menuService.getMenuItems();
//   }

//   ngOnInit() {
//     this.isMenuItemsVisible = true;
//     this.route.queryParams.subscribe(params => {
//       this.imageName = params['name']; // Get the image name from query params
//       this.filteredMenuItems = this.menuService.menuItems.filter(item => item.ImageName === this.imageName); // Filter menu items
//       this.cartItemsForImage = this.cartService.getCartItemsForImage(this.imageName); 
//     });
//   }


//   increaseCount(item: any) {
//     item.count++;
//     this.menuService.updateItemCount(item.name, item.count);
//     this.cartService.updateItemCount(item.name, item.count,item.ImageName,item.price);  // Sync with cart service
//   }

//   decreaseCount(item: any) {
//     if (item.count > 0) {
//       item.count--;
//       this.menuService.updateItemCount(item.name, item.count);
//       this.cartService.updateItemCount(item.name, item.count,item.ImageName,item.price);  // Sync with cart service
//     }
//   }
//   showCartItems(imageName: string) {
//     this.cartItemsForImage = this.cartService.getCartItemsForImage(imageName);
//   }
//   navigateToCart() {
//     this.router.navigate(['/cart'], { queryParams: { ImageName: this.imageName,price:this.price } });
//   }
  
// } 
 
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../services/cart.service';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  isMenuItemsVisible: boolean = false;
  imageName: string = '';
  filteredMenuItems: any[] = [];
  cartItemsForImage: any[] = [];
  menuItems: any[] = [];
  price: number = 0;  // Define price here

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuItems = this.menuService.getMenuItems();
  }

  ngOnInit() {
    this.isMenuItemsVisible = true;
    this.route.queryParams.subscribe(params => {
      this.imageName = params['name']; 
      this.filteredMenuItems = this.menuService.menuItems.filter(item => item.ImageName === this.imageName); // Filter menu items
      this.cartItemsForImage = this.cartService.getCartItemsForImage(this.imageName);
    });
  }

  increaseCount(item: any) {
    item.count++;
    this.menuService.updateItemCount(item.name, item.count);
    this.cartService.updateItemCount(item.name, item.count, item.ImageName, item.price);  // Sync with cart service
    this.cartService.updateCartItems
  }

  decreaseCount(item: any) {
    if (item.count > 0) {
      item.count--;
      this.menuService.updateItemCount(item.name, item.count);
      this.cartService.updateItemCount(item.name, item.count, item.ImageName, item.price);  // Sync with cart service
      this.cartService.updateCartItems
    }
  }
 


  // Update navigateToCart method to include the price of the item
  navigateToCart() {
    const selectedItem = this.filteredMenuItems[0]; // Get the selected item 
    this.price = selectedItem ? selectedItem.price : 0; // Ensure price is set to the selected item's price
    this.router.navigate(['/cart'], { queryParams: { ImageName: this.imageName, price: this.price } });
  }
}

