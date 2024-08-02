import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStarts]'
})
export class RatingStarsDirective implements OnChanges {
  @Input() appRatingStars?: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.updateStars();
  }

  private updateStars() {
    if (this.appRatingStars !== undefined) {
        const stars = Math.round(this.appRatingStars / 2); // Convert rating out of 10 to stars out of 5
        const starElements = Array(5).fill('☆').map((_, index) => index < stars ? '★' : '☆').join('');
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', starElements);
    } else {
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '☆☆☆☆☆'); // Default to 0 stars if undefined
    }
}
}
