import {Component, inject, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private contentService = inject(ContentService);
  private router = inject(Router);

  content = this.contentService.siteContent;
  navItems = signal(this.contentService.getNavItems());
  logoUrl = signal(this.contentService.getLogoUrl());

  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 100);
      });
    }
  }
}
