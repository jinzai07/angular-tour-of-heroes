import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { HeroesDetailsComponent } from './heroes/heroes-details/heroes-details.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HeroesComponent,
    DashboardListComponent,
    HeroesDetailsComponent,
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
