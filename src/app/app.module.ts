
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CVComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ScrollspyDirective } from './scrollspy.directive';
import { NavbarNavManipulatorDirective } from './navbar/navbar-nav-manipulator.directive';
import { PhotoSwipeComponent } from './photoswipe/photoswipe.component';
import { ImageItemComponent } from './portfolio/items/image-item/image-item.component';
import { FirstImageComponent } from './portfolio/items/first-image/first-image.component';
import { SecondImageComponent } from './portfolio/items/second-image/second-image.component';
import { VeryinterestingVideoComponent } from './portfolio/items/veryinteresting-video/veryinteresting-video.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CVComponent,
    PortfolioComponent,
    ContactsComponent,
    PageNotFoundComponent,
    ScrollspyDirective,
    NavbarNavManipulatorDirective,
    PhotoSwipeComponent,
    ImageItemComponent,
    FirstImageComponent,
    SecondImageComponent,
    VeryinterestingVideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
