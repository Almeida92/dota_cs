import { Component, OnInit, Input } from '@angular/core';
import { ListaComponent } from '../lista.component';
import { IHero } from '../../../../classes/IHero';

@Component({
  selector: 'app-hero-detalhe',
  templateUrl: './hero-detalhe.component.html',
  styleUrls: ['./hero-detalhe.component.css']
})
export class HeroDetalheComponent implements OnInit {

  @Input() hero: IHero;

  constructor() { }

  ngOnInit() {
  }

}
