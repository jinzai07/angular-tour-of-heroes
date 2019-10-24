import { Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { Hero } from "../models/hero.model";
import { HeroService } from "../services/hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @ViewChild('searchHero', {static: false}) inputFields: ElementRef;
  heroes: Hero[];
  heroSearch: string;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    this.heroService.heroChanged.subscribe(hero => {
      this.heroes = hero;
    });
  }
  onSearchHero(hero: string){
    this.heroSearch = hero;
    this.inputFields.nativeElement.value = '';
  }
}
