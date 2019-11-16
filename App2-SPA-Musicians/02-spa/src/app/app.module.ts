/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routes */
import { APP_ROUTING } from './app.routes';

/* Services */
import { MusiciansService } from './services/musicians.service';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { AboutComponent } from './components/about/about.component';
import { MusicianComponent } from './components/musician/musician.component';
import { SearchComponent } from './components/search/search.component';
import { MusicianCardComponent } from './components/musician-card/musician-card.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MusiciansComponent,
    AboutComponent,
    MusicianComponent,
    SearchComponent,
    MusicianCardComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    MusiciansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }