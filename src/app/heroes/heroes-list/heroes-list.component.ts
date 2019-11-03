import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/models/hero.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes();
    this.heroes$ = this.heroService.getAllheroes.asObservable();
  }
  deleteHero(id: number){
    this.heroService.onDeleteHero(id);
  }
}
