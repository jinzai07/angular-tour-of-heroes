import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	@ViewChild('searchHero', { static: false })
	inputFields: ElementRef;
	heroes$: Observable<Hero[]>;
	heroSearch: string;
	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.heroService.getHeroes();
    this.heroes$ = this.heroService.getAllheroes.asObservable();
    //test
    // this.heroService.updateOneHero(3,'test')
	}
	onSearchHero(hero: string) {
		this.heroSearch = hero;
		this.inputFields.nativeElement.value = '';
	}
}
