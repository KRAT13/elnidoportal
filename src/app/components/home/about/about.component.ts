import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import * as AOS from 'aos';

AOS.init({
  duration: 800,
  once: true,
});
@Component({
  selector: 'app-about',
  imports: [LogoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private fbProfileId = '100001725262522';
  private fbUsername = 'tark13com';

  openFacebookProfile(): void {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `fb://profile/${this.fbProfileId}`;
      setTimeout(() => {
        window.location.href = `https://www.facebook.com/${this.fbUsername}`;
      }, 2000);
    } else {
      window.location.href = `https://www.facebook.com/${this.fbUsername}`;
    }
  }

  openMessenger(): void {
    const timeout = setTimeout(() => {
      window.open(`https://m.me/${this.fbUsername}`, '_blank');
    }, 1500);

    window.location.href = `fb-messenger://user-thread/${this.fbUsername}`;
  }

  openWebsite(): void {
  window.open('https://www.tark13.com', '_blank');
}
}
