import { Hero } from '../models/hero.model';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { DatabaseService } from './database.service';

@Injectable({
	providedIn: 'root'
})
export class HeroService {
	constructor(private databaseService: DatabaseService) {}
  heroChanged = new Subject<Hero[]>();
  newHeroLength = new Subject<number>();

	getAllheroes = new BehaviorSubject([]);
	getHero = new Subject<Hero>();
	// private heroes: Hero[] = [
	//   new Hero(1, "Mr. Nice"),
	//   new Hero(2, "Narco"),
	//   new Hero(3, "Bombasto"),
	//   new Hero(4, "Celeritas"),
	//   new Hero(5, "Magneta"),
	//   new Hero(6, "RubberMan"),
	//   new Hero(7, "Dynama"),
	//   new Hero(8, "Dr IQ")
	// ];

	getHeroes() {
		this.databaseService.getHeroes().subscribe((heroes) => {
			this.getAllheroes.next(heroes);
		});
	}
	getOneHero(id: number) {
		this.databaseService.getHero(id).subscribe((hero) => {
			this.getHero.next(hero);
		});
  }
  // updateOneHero(id, data){
  //   this.databaseService.updateHeroName(id, data);
  // }




	addNewHero(hero: Hero) {
		this.databaseService.addNewHero(hero);
	}
	heroLength() {
    this.databaseService.getHeroes().subscribe((heroes)=>{
      this.newHeroLength.next(heroes.length);
    })
	}
	onDeleteHero(id: number) {
		const indexOfHero = this.heroes.findIndex((x) => x.id === id);
		this.heroes.splice(indexOfHero, 1);
		this.heroChanged.next(this.heroes.slice());
	}
	updateHero(newHeroName: string, id: number) {
		this.heroes.find((x) => x.id === id).name = newHeroName;
		this.heroChanged.next(this.heroes.slice());
	}
}
