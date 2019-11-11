import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { AboutComponent } from './components/about/about.component';
import { MusicianComponent } from './components/musician/musician.component';
import { SearchComponent } from './components/search/search.component';

/* TODO NO FUNCIONA */

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'musicians', component: MusiciansComponent },
    { path: 'musician/:id', component: MusicianComponent },
    { path: 'search/:term', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
