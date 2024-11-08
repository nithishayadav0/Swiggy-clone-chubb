import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-whats-on-mind',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './whats-on-mind.component.html',
  styleUrl: './whats-on-mind.component.scss'
})
export class WhatsOnMindComponent {
  images = [
    
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s', title: 'pizza' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7u5W-MEirZta6HOf7KOEan_v42zZeDU7Kg&s', title: 'Chinese' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSaYwUwK1ifewgSUumOoggl6MTmOFP1iSDhohvhJFmQKUbfF1-864Z_Ks2aI9m5l5fks&usqp=CAU', title: 'Burger' },
    { src: 'https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg', title: 'North Indian' },
    { src: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/frjm2fuc175aezdkya1d', title: 'Biryani' },
    { src: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/22/full/1724302552-7021.jpeg?im=FeatureCrop,size=(826,465)', title: 'South Indian' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s', title: 'Pizzas' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7u5W-MEirZta6HOf7KOEan_v42zZeDU7Kg&s', title: 'Chinese' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSaYwUwK1ifewgSUumOoggl6MTmOFP1iSDhohvhJFmQKUbfF1-864Z_Ks2aI9m5l5fks&usqp=CAU', title: 'Burger' },
    { src: 'https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg', title: 'North Indian' },
    { src: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/frjm2fuc175aezdkya1d', title: 'Biryani' },
    { src: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/22/full/1724302552-7021.jpeg?im=FeatureCrop,size=(826,465)', title: 'South Indian' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s', title: 'Pizzas' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7u5W-MEirZta6HOf7KOEan_v42zZeDU7Kg&s', title: 'Chinese' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSaYwUwK1ifewgSUumOoggl6MTmOFP1iSDhohvhJFmQKUbfF1-864Z_Ks2aI9m5l5fks&usqp=CAU', title: 'Burger' },
    { src: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/frjm2fuc175aezdkya1d', title: 'Biryani' },
    { src: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/22/full/1724302552-7021.jpeg?im=FeatureCrop,size=(826,465)', title: 'South Indian' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s', title: 'Pizzas' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7u5W-MEirZta6HOf7KOEan_v42zZeDU7Kg&s', title: 'Chinese' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSaYwUwK1ifewgSUumOoggl6MTmOFP1iSDhohvhJFmQKUbfF1-864Z_Ks2aI9m5l5fks&usqp=CAU', title: 'Burger' },
    { src: 'https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg', title: 'North Indian' },

  ];

  currentIndex: number = 0; 
  imagesPerPage: number = 7; 

  moveRight() {
    if (this.currentIndex + this.imagesPerPage < this.images.length) {
      this.currentIndex += this.imagesPerPage; 
    }
  }

  moveLeft() {
    if (this.currentIndex >= this.imagesPerPage) {
      this.currentIndex -= this.imagesPerPage; 
    }
  }
 
}
