import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { DetailcharacterComponent } from './pages/detailcharacter/detailcharacter.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'characters',
    component: CharacterComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'episode',
    component: EpisodesComponent
  },
  {
    path: 'detailCharacter/:id',
    component: DetailcharacterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
