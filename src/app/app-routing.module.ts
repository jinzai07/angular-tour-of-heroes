import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailsComponent } from './heroes/heroes-details/heroes-details.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent, children:[
    {path: ':id', component: HeroDetailComponent}
  ]},
  {path: 'hero-details/:id', component: HeroesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
