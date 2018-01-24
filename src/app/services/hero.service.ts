import { heroList } from './../mocking/heroes.mock';
import { Injectable } from '@angular/core';
import { Hero } from '../classes/Hero';

@Injectable()
export class HeroService {

  constructor() { }

  public getHeroes(): Iterable<Hero> {
    return heroList;
  }
}
