import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule, Router } from '@angular/router';

import  { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Import routes
import { ROUTES } from './app.routes';

// Import services
import { SpotifyService } from './services/spotify.service';

// Import pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { TrackPreviewPipe } from './pipes/track-preview.pipe';
import { TrackImagePipe } from './pipes/track-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    SecureDomPipe,
    CardsComponent,
    LoadingComponent,
    TrackPreviewPipe,
    TrackImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, { useHash: true } ),
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
