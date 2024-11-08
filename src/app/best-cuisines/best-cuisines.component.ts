import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-cuisines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-cuisines.component.html',
  styleUrl: './best-cuisines.component.scss'
})
export class BestCuisinesComponent {
  Places=['Chinese','Northen','Indian','Seafood','Andhra','South','Chinese','Northen','Indian','Seafood','Andhra','South']
}
