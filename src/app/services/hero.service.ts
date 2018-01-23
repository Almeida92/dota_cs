import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }

  public getHeroes(): Object {
    return [
      {"nome": "Axe","atributos": [{"nome": "attr 1", "valor": "13"}] , "habilidades":[{"nome": "habilidade 1", "valor": "45"}]},
      {"nome": "Sniper","atributos": [{"nome": "attr 1", "valor": "13"}] , "habilidades":[{"nome": "habilidade 1", "valor": "45"}]},
      {"nome": "Phanton Assasing","atributos": [{"nome": "attr 1", "valor": "13"}] , "habilidades":[{"nome": "habilidade 1", "valor": "45"}]},
      {"nome": "Silencer","atributos": [{"nome": "attr 1", "valor": "13"}] , "habilidades":[{"nome": "habilidade 1", "valor": "45"}]}];
  }
}
