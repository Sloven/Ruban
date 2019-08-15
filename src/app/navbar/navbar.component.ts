import { Component, OnInit, Inject, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  readonly DEFAULTSTATE = 'home';
  navElement: HTMLElement;
  state: string;
  @ViewChild('parent', {static: false}) navbarRef: ElementRef<HTMLElement>;

  constructor(private navbarService: NavbarService, @Inject(DOCUMENT) private document: Document) {
    this.state = this.DEFAULTSTATE;
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.navElement = this.navbarRef.nativeElement.querySelector('nav');
    // }, 10000);
  }

  ngOnInit() {
    this.navbarService.currentState$.subscribe(newState => {
        this.state = newState;
    });
  }

  scrollToClick(section) {
    document.querySelector('#' + section).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
