import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditComponent } from './edit/edit.component';
import { ArtistDetailsComponent } from './artist-detail/artist-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'artist-detail/:id',
    component: ArtistDetailComponent
  },
  {
    path: 'create',
    component: CreateNewComponent
  }

]
