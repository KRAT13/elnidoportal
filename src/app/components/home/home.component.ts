import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { TourletComponent } from './tourlet/tourlet.component';
import { AboutComponent } from './about/about.component';
import * as AOS from 'aos';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [BannerComponent, TourletComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  router = inject(Router)
  ngOnInit(): void {
      AOS.init({
        once: true, // run animation only once
        duration: 600, // animation duration
      });

      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          setTimeout(() => {
            AOS.refreshHard();
          }, 100); // small delay so DOM updates first
        });
  }
}
