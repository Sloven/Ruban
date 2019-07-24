import { Component, HostListener } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavbarService } from './navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private navbarService: NavbarService) {
  }

  onSectionChange(sectionId: string) {
    this.navbarService.CurrentState = sectionId;
  }
}
