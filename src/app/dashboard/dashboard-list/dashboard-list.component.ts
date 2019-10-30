import { Component, OnInit } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { HeroService } from "src/app/services/hero.service";
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: "app-dashboard-list",
  templateUrl: "./dashboard-list.component.html",
  styleUrls: ["./dashboard-list.component.css"]
})
export class DashboardListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService, private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.databaseService.updateDb();
    this.databaseService.getHeroes().subscribe((heroes)=>{
      this.heroes = heroes;
    })
  }
}
