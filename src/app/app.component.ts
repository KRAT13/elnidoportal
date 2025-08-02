import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  
  standalone: true,
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ])
  ]
})

export class AppComponent {
  title = 'El Nido Portal';
  private showMenu = signal(false);
  private isVisible = signal(false);
  private cdRef = inject(ChangeDetectorRef);

  toggleMenu() {
    if (this.showMenu()) {
      this.showMenu.set(false);
      setTimeout(() => {
        this.isVisible.set(false);
        this.cdRef.markForCheck();
      }, 300);
    } else {
      this.isVisible.set(true);
      setTimeout(() => {
        this.showMenu.set(true);
        this.cdRef.markForCheck();
      });
    }
  }

  isMenuVisible = this.isVisible.asReadonly();

  // Dynamic class binding
  menuAnimationClass = computed(() => {
    return this.showMenu()
      ? 'transition-all duration-300 transform opacity-100 scale-100'
      : 'transition-all duration-300 transform opacity-0 scale-95';
  });

  onAnimationDone() {
    // not needed here, but you can hook into animation end
  }
}
