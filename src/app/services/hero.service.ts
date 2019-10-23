import { Hero } from "../models/hero.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  private heroes: Hero[] = [
    new Hero(1, "Test hero 1"),
    new Hero(2, "Test hero 2"),
    new Hero(3, "Test hero 3"),
    new Hero(4, "Test hero 4"),
    new Hero(5, "Test hero 6"),
    new Hero(6, "Test hero 7"),
    new Hero(7, "Test hero 8"),
    new Hero(8, "Test hero 9")
  ];
  getHeroes() {
    return this.heroes.slice();
  }
  getOneHero(id: number) {
    return this.heroes[id];
  }

}
