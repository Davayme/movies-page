import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEmojiGenres]'
})
export class EmojiGenresDirective {

  @Input('appGenreEmoji') genre: string = '';

  private genreEmojis: { [key: string]: string } = {
    'Acción': '🔥',
    'Aventura': '🗺️',
    'Animación': '🎨',
    'Comedia': '😂',
    'Crimen': '🚔',
    'Documental': '🎥',
    'Drama': '🎭',
    'Familia': '👨‍👩‍👧‍👦',
    'Fantasía': '🧙‍♂️',
    'Historia': '📜',
    'Terror': '👻',
    'Música': '🎵',
    'Misterio': '🕵️‍♂️',
    'Romance': '❤️',
    'Ciencia ficción': '🚀',
    'Película de TV': '📺',
    'Suspense': '🔪',
    'Bélica': '⚔️',
    'Western': '🤠'
  };
  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnChanges() {
    const emoji = this.genreEmojis[this.genre] || '🎬';
    this.renderer.setProperty(this.el.nativeElement, 'textContent', `${emoji} ${this.genre}`);
  }
}
