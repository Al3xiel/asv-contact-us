import {Component, DOCUMENT, effect, inject, Renderer2, signal} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private contentService = inject(ContentService);
  private router = inject(Router);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  content = this.contentService.siteContent;
  navItems = signal(this.contentService.getNavItems());
  logoUrl = signal(this.contentService.getLogoUrl());

  mobileMenuOpen = signal(false);

  constructor() {
    effect(() => {
      if (this.mobileMenuOpen()) {
        // Bloquea el scroll del fondo cuando el menú móvil está abierto
        this.renderer.addClass(this.document.body, 'overflow-hidden');
      } else {
        // Restaura el scroll cuando se cierra
        this.renderer.removeClass(this.document.body, 'overflow-hidden');
      }
    });
  }
}
