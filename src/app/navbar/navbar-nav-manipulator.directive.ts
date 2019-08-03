import { Directive, ElementRef, Renderer2, Input, AfterViewInit, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Directive({
    selector: '[appNavbarNavManipulator]'
})
export class NavbarNavManipulatorDirective implements AfterViewInit, OnInit {

    navChild: any;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private navbarService: NavbarService) { }

    ngOnInit() {
        this.navbarService.currentState.subscribe(newState => {
            this.setTopNavClassToNavElement(this.navChild, (newState === 'home'));
        });
    }

    ngAfterViewInit() {
        this.navChild = this.el.nativeElement.querySelector('nav');
        // this.renderer.addClass(this.navChild, 'ttttttttttttttttttttttttttt');
    }

    setTopNavClassToNavElement(navElement: HTMLElement, isDefault: boolean) {
        if (!navElement) {
          return;
        }
        if (isDefault) {
          navElement.classList.remove('top-nav-collapse');
        } else {
          navElement.classList.add('top-nav-collapse');
        }
      }
}
