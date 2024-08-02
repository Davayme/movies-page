import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],

})
export class CarrouselComponent {
  @ViewChild('slider') slider!: MatSlider;
  activeIndex = 0;

  slides = [
    { image: 'assets/slide1.jpg', title: 'Slide 1' },
    { image: 'assets/slide2.jpg', title: 'Slide 2' },
    { image: 'assets/slide3.jpg', title: 'Slide 3' }
  ];

  formatLabel(value: number) {
    return this.slides[value].title;
  }

  onInputChange(event: any) {
    this.activeIndex = event.value;
  }
}
