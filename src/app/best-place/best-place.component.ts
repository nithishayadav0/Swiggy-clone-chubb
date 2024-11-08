import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-best-place',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './best-place.component.html',
  styleUrl: './best-place.component.scss'
})
export class BestPlaceComponent {
 Places=['Chennai','Banglore','Pune','Mumbai','Chennai','Jaipur','Delhi','Chennai','Banglore','Pune','Mumbai','Chennai']
}
