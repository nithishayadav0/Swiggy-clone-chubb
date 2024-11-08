import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { CartComponent } from './cart/cart.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FavouritesComponent } from './favourites/favourites.component';


export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'menu-items', component: MenuItemsComponent },
    { path: 'cart', component: CartComponent},
    { path: 'favourites', component: FavouritesComponent },
    { path: 'my-account', component: MyAccountComponent },
];
