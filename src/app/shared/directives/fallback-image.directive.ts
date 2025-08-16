import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[fallbackSrc]'
})
export class FallbackImageDirective {
  @Input() fallbackSrc: string = 'assets/images/no_image.svg';

  @HostListener('error', ['$event'])
  onError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = this.fallbackSrc;
  }
}
