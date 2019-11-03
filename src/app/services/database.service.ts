import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Hero } from '../models/hero.model';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {
	constructor(private http: HttpClient) {}

	getHeroes() {
		return this.http.get<Hero[]>('https://angular-tour-of-heroes-ead5b.firebaseio.com/heroes.json');
	}
	getHero(id: number) {
		return this.http.get<Hero[]>('https://angular-tour-of-heroes-ead5b.firebaseio.com/heroes.json').pipe(
			map((heroes) => {
				return heroes.find((x) => x.id === id);
			})
		);
	}
	addNewHero(hero: Hero){
		this.http.post('https://angular-tour-of-heroes-ead5b.firebaseio.com/heroes.json', hero)
	}
	// updateHeroName(id: number, newName: string) {
	// 	this.http.get<Hero[]>('https://angular-tour-of-heroes-ead5b.firebaseio.com/heroes.json/0/').subscribe((x)=>console.log(x));
	// }
}
