import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from './navbar.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  state = 'home';

  constructor(private navbarService: NavbarService, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.navbarService.currentState.subscribe(newState => this.scrollTo(newState));
  }

  scrollTo(section) {
    if (this.navbarService.CurrentState !== section) {
      this.navbarService.CurrentState = section;
      document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
    }
    this.state = this.navbarService.CurrentState;
  }

}
