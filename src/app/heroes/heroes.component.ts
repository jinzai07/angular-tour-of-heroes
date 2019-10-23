import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroList: FormGroup;
  constructor() { }

  ngOnInit() {
    this.heroList = new FormGroup({
      name: new FormControl(null)
    })
  }
  submit(){
    console.log(this.heroList.value)
  }
}
