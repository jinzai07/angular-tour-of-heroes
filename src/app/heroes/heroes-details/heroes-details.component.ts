import { Component, OnInit, ViewChild } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { ActivatedRoute, Params } from "@angular/router";
import { HeroService } from "src/app/services/hero.service";
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: "app-heroes-details",
  templateUrl: "./heroes-details.component.html",
  styleUrls: ["./heroes-details.component.css"]
})
export class HeroesDetailsComponent implements OnInit{
  hero$: Observable<Hero>;
  id: number;
  heroName: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
    this.heroService.getOneHero(this.id);
    this.heroService.getHero.subscribe((hero)=>this.heroName = hero.name)
    this.hero$ = this.heroService.getHero.asObservable();
  }

  onBack() {
    this.location.back()
  }
  onSave(newHeroName: string) {
    this.heroService.updateHero(newHeroName, this.id);
    this.location.back();
  }
}
