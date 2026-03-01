import {Component, inject} from '@angular/core';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-about-us-1',
  imports: [],
  templateUrl: './about-us-1.html',
  styleUrl: './about-us-1.css',
})
export class AboutUs1 {
  private contentService = inject(ContentService);
  content = this.contentService.siteContent;
}
