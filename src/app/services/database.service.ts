import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private heroService: HeroService, private http: HttpClient) { }

  updateDb () {
    this.http.put('https://angular-tour-of-heroes-ead5b.firebaseio.com/heroes.json', this.heroService.getHeroes()).subscribe();
  }
  getHeroes () {
    return this.http.get('https://angular-tour-of-heroes-ead5b.firebaseio.com/heroes.json').pipe(map(heroes =>{
      const heroesArray = [];
      for (const item in heroes) {
        heroesArray.push({...heroes[item]});
      }
      return heroesArray
    }))
  }
}
