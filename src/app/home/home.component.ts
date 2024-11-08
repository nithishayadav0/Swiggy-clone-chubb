import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WhatsOnMindComponent } from '../whats-on-mind/whats-on-mind.component';
import { CommonModule } from '@angular/common';
import { TopPicksComponent } from '../top-picks/top-picks.component';
import { OnlinefoodComponent } from '../onlinefood/onlinefood.component';
import { BestPlaceComponent } from '../best-place/best-place.component';
import { BestCuisinesComponent } from '../best-cuisines/best-cuisines.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '../register/register.component';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    WhatsOnMindComponent,
    CommonModule,
    TopPicksComponent,
    OnlinefoodComponent,
    BestPlaceComponent,
    BestCuisinesComponent,
    FooterComponent,
    LoginComponent,
    HttpClientModule,
    RegisterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private menuService: MenuService,private cartService:CartService) {}
  ngOnInit() {

 
  }
}
