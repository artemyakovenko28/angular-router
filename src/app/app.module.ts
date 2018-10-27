import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { CrisisCenterModule } from './crisis-center.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CrisisCenterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
