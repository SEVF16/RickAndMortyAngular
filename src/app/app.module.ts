import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { FormsearchComponent } from './shared/formsearch/formsearch.component';
import { DetailcharacterComponent } from './pages/detailcharacter/detailcharacter.component';
import { SelectComponent } from './shared/select/select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UrlValueNumberPipe } from './pipes/url-value-number.pipe';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CharacterComponent,
    LocationsComponent,
    EpisodesComponent,
    FormsearchComponent,
    DetailcharacterComponent,
    SelectComponent,
    UrlValueNumberPipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
