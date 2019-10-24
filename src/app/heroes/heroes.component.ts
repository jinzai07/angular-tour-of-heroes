import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HeroService } from "../services/hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroList: FormGroup;
  heroCount: number;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroCount = this.heroService.heroLength();
    this.heroService.heroLengthChanged.subscribe((d)=>{
      this.heroCount = d;
    })
    this.heroList = new FormGroup({
      id: new FormControl(this.heroCount),
      name: new FormControl(null, Validators.required)
    });
  }
  addHero() {
    this.heroList.patchValue({
      id: this.heroCount
    })
    this.heroService.addNewHero(this.heroList.value);
    this.heroList.reset();
  }
}
