import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditComponent } from './edit/edit.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ArtistPipe } from './artist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewComponent,
    EditComponent,
    ArtistDetailComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ArtistPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
