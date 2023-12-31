import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "src/app/service/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
    private router:Router) {}

  ngOnInit() {
    //useEfect
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(id: number) {
this.router.navigate(['heroe', id])  }
}
