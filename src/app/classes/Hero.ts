import { IHero } from './IHero';

export class Hero implements IHero {
    nome: String;
    atributos: Object;
    habilidades: Iterable<Object>;
}