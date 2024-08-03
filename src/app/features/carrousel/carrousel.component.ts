import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],


})
export class CarrouselComponent {
  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  slides = [
    { image: 'https://via.placeholder.com/600x400?text=Slide+1' },
    { image: 'https://via.placeholder.com/600x400?text=Slide+2' },
    { image: 'https://via.placeholder.com/600x400?text=Slide+3' }
  ];
}
