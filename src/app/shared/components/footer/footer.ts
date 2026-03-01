import {Component, inject, signal} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private contentService = inject(ContentService);
  content = this.contentService.siteContent;
  logoUrl = signal(this.contentService.getLogoUrl());
}
