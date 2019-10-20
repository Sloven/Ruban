import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { IImage } from '../interfaces/iimage';
import { PhotoSwipeService } from './photoswipe.service';

@Component({
  selector: 'app-photoswipe',
  templateUrl: './photoswipe.component.html',
  styleUrls: ['./photoswipe.component.scss']
})
export class PhotoSwipeComponent {

  @ViewChild('photoSwipe', {static: false}) photoSwipe: ElementRef;
  @ViewChild('youtube-frame', {static: false}) iframe: ElementRef;

  @Input() images: IImage[] = [];

  constructor(private psService: PhotoSwipeService, private elem: ElementRef) { }

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
      gallery.listen('destroy', this.onClose);
      gallery.init();
  }

  onClose() {
    const frames = Array.from(document.getElementsByClassName('youtube-frame'));

    frames.forEach((frame: HTMLIFrameElement) => {
      frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });
    // this.psService.onClose();
    // for (const i in document.getElementsByClassName('youtube-frame')) {
    //  const frame = i as unknown as HTMLIFrameElement;
    //  frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    // }
    // const frame =  this.iframe.nativeElement; // .contentDocument || this.iframe.nativeElement.contentWindow;
  }
}
