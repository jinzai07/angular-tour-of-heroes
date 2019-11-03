import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  id: number;
  hero$: Observable<Hero>;
  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params["id"];
      this.heroService.getOneHero(this.id);
      this.hero$ = this.heroService.getHero.asObservable();
    })
  }
  viewDetails(){
    this.router.navigate(['hero-details', this.id])
  }

}
