import { HeroService } from './../../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Object;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
