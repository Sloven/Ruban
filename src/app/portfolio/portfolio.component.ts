import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhotoSwipeComponent } from '../photoswipe/photoswipe.component';
import { IImage } from '../interfaces/iimage';
import { PhotoSwipeService } from '../photoswipe/photoswipe.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('photoSwipe', {static: false}) photoSwipe: PhotoSwipeComponent;

  constructor(private psService: PhotoSwipeService) {
  }

  ngOnInit() {
  }

  // ========================================================================
  openSlideshow() {
        const images: IImage[] = [
            {
                src: 'http://via.placeholder.com/600x400',
                w: 600,
                h: 400,
                html: null
            },
            {
                src: 'http://via.placeholder.com/800x600',
                w: 1200,
                h: 900,
                html: null
            },
            {
                src: 'http://via.placeholder.com/960x960',
                w: 960,
                h: 960,
                html: null
            },
            {
                src: 'http://via.placeholder.com/1080x960',
                w: 1080,
                h: 960,
                html: null
            },
            {
                src: 'http://via.placeholder.com/1200x900',
                w: 1200,
                h: 900,
                html: null
            },
            {
              src: null,
              w: 960,
              h: 640,
              // tslint:disable-next-line:max-line-length
              html: `
                <div class="flex-center flex-column">
                    <div class="col-md-5 embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item youtube-frame" src="https://www.youtube-nocookie.com/embed/iP2JGliTdvw?rel=0&enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen ></iframe>
                    </div>
                </div>`
            }
        ];

        this.photoSwipe.openGallery(images);
    }
}

// html: `<div class="embed-responsive embed-responsive-4by3">
// <iframe width="420" height="315" class="embed-responsive-item" src="https://www.youtube.com/embed/FaRJcWMDCjs" frameborder="0" allowfullscreen></iframe>
// </div>`

// html: '<div class="wrapper"><div class="video-wrapper embed-responsive-item embed-responsive-4by3"><iframe class="pswp__video" width="960" height="640" src="https://www.youtube-nocookie.com/embed/iP2JGliTdvw?rel=0" frameborder="0" allowfullscreen></iframe></div></div>'