import { Component, OnInit, OnDestroy } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HeroService } from "src/app/services/hero.service";
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: "app-heroes-details",
  templateUrl: "./heroes-details.component.html",
  styleUrls: ["./heroes-details.component.css"]
})
export class HeroesDetailsComponent implements OnInit{
  hero: Hero;
  id: number;
  viewFromStatus: boolean;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]; 
    });
    this.hero = this.heroService.getOneHero(this.id);
  }
  onBack() {
    this.location.back()
  }
}
