import { IHero } from './IHero';

export class Hero implements IHero {
    constructor(public nome: String, public atributos: Iterable<object>, public habilidades: Iterable<Object>) {}
}
