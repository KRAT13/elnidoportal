import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

AOS.init({
  duration: 800,
  once: true,
});
@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  fb() {
      window.open('https://www.facebook.com/tark13com/', "_blank");
  }

  ln() {
    window.open('https://www.linkedin.com/in/tark13/', '_blank');
  }

  msg() {
    window.open('https://m.me/tark13com?text=Hi!%20Just%20clicked%20from%20your%20website.', '_blank');
  }

  downloadPDF(): void {
    // URL of the PDF file
    const pdfUrl = 'assets/tark_cv.pdf'; // Replace with your file URL
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'sample.pdf'; // Default file name
    link.target = '_blank';
    link.click();
  }
}
