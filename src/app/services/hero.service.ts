import { Hero } from "../models/hero.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  heroChanged = new Subject<Hero[]>();
  heroLengthChanged = new Subject<number>();
  private heroes: Hero[] = [
    new Hero(1, "Mr. Nice"),
    new Hero(2, "Narco"),
    new Hero(3, "Bombasto"),
    new Hero(4, "Celeritas"),
    new Hero(5, "Magneta"),
    new Hero(6, "RubberMan"),
    new Hero(7, "Dynama"),
    new Hero(8, "Dr IQ")
  ];
  getHeroes() {
    return this.heroes.slice();
  }
  getOneHero(id: number) {
    return this.heroes.find(x => x.id === id);
  }
  addNewHero(hero: Hero){
    this.heroes.push(hero);
    this.heroChanged.next(this.heroes.slice()); //update hero list with new data
    this.heroLengthChanged.next(this.heroLength());
  }
  heroLength(){
    return this.heroes.length + 1;
  }
  onDeleteHero(id: number){
    const indexOfHero = this.heroes.findIndex(x=> x.id === id);
    this.heroes.splice(indexOfHero, 1);
    this.heroChanged.next(this.heroes.slice());
  }
  updateHero(newHeroName: string, id: number){
    this.heroes.find(x => x.id === id).name = newHeroName;
    this.heroChanged.next(this.heroes.slice());
  }
}
