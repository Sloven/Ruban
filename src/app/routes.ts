import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CVComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent }
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent},
    // { path: 'cv', component: CVComponent },
    // { path: 'portfolio', component: PortfolioComponent },
    // { path: 'contacts', component: ContactsComponent },
    // { path: '**', component: PageNotFoundComponent }
  ];
