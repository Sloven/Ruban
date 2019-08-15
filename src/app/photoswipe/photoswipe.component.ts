import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { IImage } from '../interfaces/iimage';

@Component({
  selector: 'app-photoswipe',
  templateUrl: './photoswipe.component.html',
  styleUrls: ['./photoswipe.component.scss']
})
export class PhotoSwipeComponent {

  @ViewChild('photoSwipe', {static: false}) photoSwipe: ElementRef;
  @Input() images: IImage[] = [];

  constructor() { }

  openGallery(images?: IImage[]) {
      // Build gallery images array
      images = images || this.images;

      // define options (if needed)
      const options = {
          // optionName: 'option value'
          // for example:
          index: 0 // start at first slide
      };

      // Initializes and opens PhotoSwipe
      const gallery = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, images, options);
      gallery.init();
  }
}
