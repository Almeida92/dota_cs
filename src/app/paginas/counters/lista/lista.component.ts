import { HeroService } from './../../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from '../../../classes/IHero';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  private heroes: Iterable<IHero>;
  private selectedHero: IHero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  selecionarHero(hero: IHero): void {
    this.selectedHero = hero;
  }
}
